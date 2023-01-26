import { FormSticker } from "components/FormSticker/FormSticker";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts-and-filtering/operations";
import { selectContacts, selectIsLoadingAdd } from "redux/contacts-and-filtering/selectors";
import { nameIsInContacts } from "utils/checks/check-by-name";
import { capitalized } from "utils/formatting/capitalize";
import { unified } from "utils/formatting/unify";
import { addContactSchema } from "utils/validation";

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const onContactAdd = async ({name, number}, {resetForm}) => {
    const nameToAdd = unified(name);
    const numberToAdd = number.trim();
    if(nameIsInContacts(contacts, name)) {
      return toast.error(`${capitalized(name)} is already in contacts`);
    }
    await dispatch(addContact({name: nameToAdd, number: numberToAdd}));
    resetForm();
    toast.success(`Contact '${capitalized(name)}' has been added successfully`);
  }

  const addFormObj = {
    stickerColor: "default",
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