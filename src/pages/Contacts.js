import { ContactForm } from "components/ContactAddForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { PageHeading } from "components/Heading/Heading"

export const Contacts = () => {
    return (
        <>
            <PageHeading text = "Contacts"/>
            <ContactForm/>
            <Filter />  
            <ContactList/>
        </>
    )
}