import { Contacts, ContactItem } from "./ContactList.styled";
import {FaWindowClose} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { BeatLoader } from "react-spinners";

export const ContactList = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);

    let contacts = useSelector(selectFilteredContacts);

    const onContactDelete = e => {
        const id = e.target.closest('button').id;
        dispatch(deleteContact(id));
    }

    return (
        <Contacts>
            {contacts.map(({id, name, number}) => 
            <ContactItem key={id}>
                <span className="name">{name}</span>
                <span className="number">{number}</span>
                <button className="close-btn" type="button" id={id} onClick={onContactDelete}><FaWindowClose color="red" size={20}/></button>
            </ContactItem>)}
            <ContactItem className="spinner">.<BeatLoader loading={isLoading} margin={3} size={10} color='blue'/></ContactItem>
        </Contacts>
    );
}