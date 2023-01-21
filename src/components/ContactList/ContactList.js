import { Contacts, ContactItem } from "./ContactList.styled";
import {FaWindowClose} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoadingFetch} from 'redux/contacts-and-filtering/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts-and-filtering/operations';
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const ContactList = () => {
    const dispatch = useDispatch();
    const [isDeleted, setIsDeleted] = useState(null);
    const isLoading = useSelector(selectIsLoadingFetch);
    let contacts = useSelector(selectFilteredContacts);

    useEffect( () => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onContactDelete = async e => {
        const id = e.target.closest('button').id;
        setIsDeleted(id);
        await dispatch(deleteContact(id));
        setIsDeleted(null);
        toast.success('Contact has been deleted.');
    }

    return (
        <Contacts>
            {contacts.map(({id, name, number}) => 
            <ContactItem key={id} isDeleted = {isDeleted === id }>
                <span className="name">{name}</span>
                <span className="number">{number}</span>
                <button className="close-btn" type="button" id={id} onClick={onContactDelete} disabled={!!isDeleted}><FaWindowClose color="red" size={20}/></button>
            </ContactItem>)}
            <ContactItem className="spinner">.<BeatLoader loading={isLoading} margin={3} size={10} color='blue'/></ContactItem>
        </Contacts>
    );
}