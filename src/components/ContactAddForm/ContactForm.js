import { Formik, Form} from "formik";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { addContact } from "redux/contacts-and-filtering/operations";
import { selectContacts, selectIsLoadingAdd } from "redux/contacts-and-filtering/selectors";
import { NameIsInContacts } from "utils/check-by-name";
import { addContactSchema } from "utils/validation";
import {FormWrap, Input, SubmitBtn, ErrorNotify } from "./ContactForm.styled";

export const ContactForm = () => {
  const isLoading = useSelector(selectIsLoadingAdd)
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onContactAdd = async ({name, number}, {resetForm}) => {
    
    if(NameIsInContacts(contacts, name)) {
      return toast.error(`${name} is already in contacts`);
    }
    await dispatch(addContact({name, number}));
    resetForm();
    toast.success(`Contact '${name}' has been added successfully`);
  }

  return (
    <FormWrap color = "default" fields={2}>
      <h2>Add contact</h2>
      <Formik
          initialValues={{
              name: '',
              number: '',
          }}
          validationSchema ={addContactSchema}
          onSubmit={onContactAdd}
       >      
           <Form>
             <label>Name
               <Input
                 type="text"
                 name="name"
               />
               <ErrorNotify name="name" component={"span"}/>
             </label>
             <label>Number
               <Input
                 type="tel"
                 name="number"
               />
               <ErrorNotify name="number" component={"span"} />
             </label>
             <SubmitBtn type="submit" disabled={isLoading}>Add <BeatLoader loading={isLoading} color="#000a" size={3} speedMultiplier={0.7} cssOverride={{
    bottom: 4,
    position: 'absolute',
    right: 6
  }}/></SubmitBtn>
           </Form>      
      </Formik>
    </FormWrap>
 )
}