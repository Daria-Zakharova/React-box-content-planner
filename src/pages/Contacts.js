import { ContactForm } from "components/ContactAddForm/ContactAddForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { PageHeading } from "components/Heading/Heading"

export default function Contacts () {
    return (
        <>
            <PageHeading text = "Contacts"/>
            <ContactForm/>
            <Filter />  
            <ContactList/>
        </>
    )
}