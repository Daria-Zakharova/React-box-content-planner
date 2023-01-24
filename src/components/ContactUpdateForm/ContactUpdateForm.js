import { nanoid } from "@reduxjs/toolkit";
import { Formik, Field,  ErrorMessage  } from "formik";
import { useEffect, useState } from "react";
import {MdDownloadDone} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "redux/contacts-and-filtering/operations";
import { capitalized } from "utils/formatting/capitalize";
import { addContactSchema } from "utils/validation";
import { FormStyled } from "./ContactUpdateForm.styled";

export const ContactUpdateForm = ({formObj, updatedId}) => {
/*  {
    inputs: [ 
        //name {
            name
            initialValue,
            value,
            onChange,
        },
        //number: {
            name
            initialValue,
            value,
            onChange,
        }
    ],
    onSubmit,
    isLoadingSelector} */

    const { inputs, isLoadingSelector, onSubmitSuccess } = formObj;
    const dispatch = useDispatch();
    const [contactName, setContactName] = useState(capitalized(inputs.find(input => input.name === "name").initialValue));
    const [number, setNumber] = useState(inputs.find(input => input.name === "number").initialValue);
useEffect(() => {console.log(contactName, number);}, [contactName, number]);
    const isLoading = useSelector(isLoadingSelector);

    const onSubmit = async () => {
        await dispatch(updateContact({id: updatedId, name: contactName, number}));
        onSubmitSuccess();
    }
    
    return (<Formik
        validateOnChange
        initialValues={{name: contactName, "number": number}}
        validationSchema ={addContactSchema}
        onSubmit={onSubmit}
     >      
         <FormStyled>
            {inputs.map(({name, type}) => { 
                const isName = name === "name"; 
                return (<label key = {nanoid()}>                
                <Field type = {type} name = {name} value = {isName ? contactName : number} size={18} onChange={e => isName ? setContactName(e.target.value) : setNumber(e.target.value)}/> 
                <ErrorMessage name = {name} component = {"span"}/>
            </label>)})}
            {/* <label><input type = "text" name = "name" value = {contactName} size={18} onChange={e => setContactName(e.target.value)}/> 
                         <ErrorMessage name = "name" component = {"span"}/>
                    </label>
                    <label><input type = "tel" name = "number" value = {number} onChange={e => setNumber(e.target.value)}/> 
                         <ErrorMessage name = "number" component = {"span"}/>
                    </label> */}
           <button type="submit" disabled={isLoading}><MdDownloadDone color="green" size={18}/></button>
         </FormStyled>      
    </Formik>)
}