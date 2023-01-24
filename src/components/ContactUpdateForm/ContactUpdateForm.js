import { nanoid } from "@reduxjs/toolkit";
import { Formik, Field,  ErrorMessage  } from "formik";
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
            type
            initialValue,
        },
        //number: {
            name
            type
            initialValue,        }
    ],
    onSubmit,
    isLoadingSelector} */

    const { inputs, isLoadingSelector, onSubmitSuccess } = formObj;
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingSelector);
    const nameInit = capitalized(inputs.find(input => input.name === "name").initialValue);
    const numberInit = inputs.find(input => input.name === "number").initialValue;


    const onSubmit = async ({name, number}) => {
        await dispatch(updateContact({id: updatedId, name, number}));
        onSubmitSuccess();
    }
    
    return (<Formik
        validateOnChange
        initialValues={{name: nameInit, number: numberInit}}
        validationSchema ={addContactSchema}
        onSubmit={onSubmit}
     >      
        <FormStyled submitting = {isLoading.toString()} >
            {inputs.map(({name, type}) =>  (
            <label key = {nanoid()}>                
                <Field type = {type} name = {name} size={18}/> 
                <ErrorMessage name = {name} component = {"span"}/>
            </label>))}
           <button type="submit" disabled={isLoading}><MdDownloadDone color="green" size={18}/></button>
         </FormStyled>    
    </Formik>)
}