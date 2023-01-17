import React, { useEffect} from "react";
import { toast, Toaster } from "react-hot-toast";
import { AppCard, AppTitle } from "./App.styled";
import { ContactForm } from "components/ContactAddForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectError} from "redux/selectors";


export const App = () => {
  const error = useSelector(selectError);
  
  useEffect(() => {
    error && toast.error(error);
  }, [error])

  return (
    <AppCard>
      <Toaster/>
      <AppTitle>Contacts</AppTitle>
      <ContactForm/>
      <Filter />  
      <ContactList/>
    </AppCard>
  );
}