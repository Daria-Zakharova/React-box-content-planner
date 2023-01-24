import { FormSticker } from "components/FormSticker/FormSticker";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts-and-filtering/operations";
import { selectContacts, selectIsLoadingAdd } from "redux/contacts-and-filtering/selectors";
import { NameIsInContacts } from "utils/checks/check-by-name";
import { capitalized } from "utils/formatting/capitalize";
import { addContactSchema } from "utils/validation";

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const onContactAdd = async ({name, number}, {resetForm}) => {
    name = name.toLowerCase().trim();
    if(NameIsInContacts(contacts, name)) {
      return toast.error(`${name} is already in contacts`);
    }
    await dispatch(addContact({name, number}));
    resetForm();
    toast.success(`Contact '${capitalized(name)}' has been added successfully`);
  }

  const addFormObj = {
    stickerColor: "default",
    fields: 2,
    formHeading: "Add contact",
    submitBtnTxt: "Add",
    validationSchema: addContactSchema,
    isLoadingSelector: selectIsLoadingAdd,
    onSubmit: onContactAdd,
    inputs: [
      {
        name: "name",
        type: "text",
        initialValue: "",
      },
      {
        name: "number",
        type: "tel",
        initialValue: "",
      }]
  }

  return <FormSticker formObj={addFormObj}/>
}