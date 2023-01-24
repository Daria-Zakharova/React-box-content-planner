import { Contacts, ContactItem } from "./ContactList.styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts, selectIsLoadingFetch, selectIsLoadingUpdate} from 'redux/contacts-and-filtering/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts-and-filtering/operations';
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { selectLoggedIn } from "redux/auth/selectors";
import { capitalized } from "utils/formatting/capitalize";
import { ContactUpdateForm } from "components/ContactUpdateForm/ContactUpdateForm";
import { ContactItemControls } from "components/ContactItemControls/ContactItemControls";

export const ContactList = () => {
    const dispatch = useDispatch();
    const [isDeleted, setIsDeleted] = useState(null);

    const [isUpdated, setIsUpdated] = useState(null);
    const [updatedData, setUpdatedData] = useState({name: null, number: null});

    const contacts = useSelector(selectContacts);
    const visibleContacts = useSelector(selectFilteredContacts);
    
    const isLoading = useSelector(selectIsLoadingFetch);
    const isLoggedIn = useSelector(selectLoggedIn);

    useEffect( () => {
        isLoggedIn && dispatch(fetchContacts());
    }, [dispatch, isLoggedIn]);

    const onContactDelete = async e => {
        const id = e.target.closest('button').id;
        setIsDeleted(id);
        if (isDeleted === isUpdated) {
            setIsUpdated(null);
            setUpdatedData({name: null, number: null});
        }
        await dispatch(deleteContact(id));
        setIsDeleted(null);
        toast.success('Contact has been deleted.');
    }

    const initContactUpdate = e => {
        const id = e.target.closest('button').id;        
        const {name, number} = contacts.find(contact => contact.id === id);
        setUpdatedData({name, number});
        setIsUpdated(id);
    }

    const onContactUpdateFinished = () => {     
        setIsUpdated(null);
        setUpdatedData({name: null, number: null});
        toast.success('Contact was updated');
    }

     const contactUpdateFormObj = {
        inputs: [ 
            {
                name: 'name',
                type: "text",
                initialValue: updatedData.name,
            },
            {
                name: "number",
                type: "tel",
                initialValue: updatedData.number,
            }
        ],
        onSubmitSuccess: onContactUpdateFinished,
        isLoadingSelector: selectIsLoadingUpdate,
    }; 

    return (
        <Contacts>
            {visibleContacts.map(({id, name, number}) => 
            <ContactItem key={id} isDeleted = {isDeleted === id }>
                {isUpdated === id ? 
                 <ContactUpdateForm formObj = {contactUpdateFormObj} updatedId = {isUpdated}/> : 
                (<>
                    <span className="name">{capitalized(name)}</span>
                    <span className="number">{number}</span>
                </>)}
                <ContactItemControls id = {id} onUpdate = {initContactUpdate} onDelete = {onContactDelete} isUpdated = {isUpdated === id} isDeletedId = {isDeleted === id}/>
                
            </ContactItem>)}
            <ContactItem className="spinner">.<BeatLoader loading={isLoading} margin={3} size={10} color='blue'/></ContactItem>
        </Contacts>
    );
}
