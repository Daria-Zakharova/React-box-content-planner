import { Contacts, ContactItem } from "./ContactList.styled";
import {FaWindowClose, FaEdit} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts, selectIsLoadingFetch, selectIsLoadingUpdate} from 'redux/contacts-and-filtering/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts-and-filtering/operations';
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { selectLoggedIn } from "redux/auth/selectors";
import { capitalized } from "utils/formatting/capitalize";
import { ContactUpdateForm } from "components/ContactUpdateForm/ContactUpdateForm";

export const ContactList = () => {
    const dispatch = useDispatch();
    const [isDeleted, setIsDeleted] = useState(null);

    const [isUpdated, setIsUpdated] = useState(null);
    const [updatedName, setUpdatedName] = useState(null);
    const [updatedNumber, setUpdatedNumber] = useState(null);

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
        await dispatch(deleteContact(id));
        setIsDeleted(null);
        toast.success('Contact has been deleted.');
    }

    const initContactUpdate = e => {
        const id = e.target.closest('button').id;        
        const contact = contacts.find(contact => contact.id === id);
        setUpdatedName(contact.name);
        setUpdatedNumber(contact.number);
        setIsUpdated(id);
    }

    const onContactUpdateFinished = () => {     
        setIsUpdated(null);
        setUpdatedName(null);
        setUpdatedNumber(null);
        toast.success('Contact was updated');
    }

     const contactUpdateFormObj = {
        inputs: [ 
            {
                name: 'name',
                type: "text",
                initialValue: updatedName,
            },
            {
                name: "number",
                type: "tel",
                initialValue: updatedNumber,
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
                <button className="update-btn" type="button" id={id} onClick={initContactUpdate} disabled={!!isUpdated}><FaEdit size={20}/></button>
                <button className="close-btn" type="button" id={id} onClick={onContactDelete} disabled={!!isDeleted || !!isUpdated}><FaWindowClose color="red" size={20}/></button>
            </ContactItem>)}
            <ContactItem className="spinner">.<BeatLoader loading={isLoading} margin={3} size={10} color='blue'/></ContactItem>
        </Contacts>
    );
}
