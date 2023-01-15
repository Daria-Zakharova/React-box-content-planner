import { Formik, Form} from "formik";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";
import { NameIsInContacts } from "utils/check-by-name";
import { schema } from "utils/validation";
import { AddContactWrap, Input, AddContactBtn, ErrorNotify } from "./ContactForm.styled";

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onContactAdd = ({name, number}, {resetForm}) => {
    
    if(NameIsInContacts(contacts, name)) {
      return toast.error(`${name} is already in contacts`);
    }

    dispatch(addContact({name, number}));
    resetForm();
  }

  return (
    <AddContactWrap>
      <h2>Add contact</h2>
      <Formik
          initialValues={{
              name: '',
              number: '',
          }}
          validationSchema ={schema}
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
             <AddContactBtn type="submit">Add</AddContactBtn>
           </Form>      
      </Formik>
    </AddContactWrap>
 )
}