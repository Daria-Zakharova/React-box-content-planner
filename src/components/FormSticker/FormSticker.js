import { capitalized } from "utils/formatting/capitalize";
import { ErrorNotify, FormWrap, Input, SubmitBtn } from "./FormSticker.styled";
import { Formik, Form} from "formik";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { nanoid } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

export const FormSticker = ({formObj}) => {
     /* stickerColor: default, violet, green 
    fields: 2-3 
    onSubmit: function
    isLoadingSelector: selectorFunction
    validationSchema
    submitBtnText
    inputs: [{name, type, initialValue}]
     */
    const {stickerColor, formHeading, submitBtnTxt, validationSchema, isLoadingSelector, onSubmit, inputs} = formObj;
    const isLoading = useSelector(isLoadingSelector);
    const location = useLocation();
    const hasThreeFields = location.pathname === '/signup';

 
    return (
      <FormWrap color = {stickerColor} extraContent = {hasThreeFields}>
        <h2>{formHeading}</h2>
        <Formik
            initialValues={inputs.reduce((values, {name, initialValue}) => {values[name] = initialValue; return values}, {})}
            validationSchema ={validationSchema}
            onSubmit={onSubmit}
         >      
             <Form> {inputs.map(({name, type}) => <label key = {nanoid()}>{capitalized(name)}<Input type ={type} name = {name}/> <ErrorNotify name = {name} component = {"span"}/> </label>)}

               <SubmitBtn type="submit" disabled={isLoading} extraContent = {hasThreeFields}>{submitBtnTxt}<BeatLoader loading={isLoading} color="#000a" size={3} speedMultiplier={0.7} cssOverride={{
      bottom: 4,
      position: 'absolute',
      right: 6
    }}/></SubmitBtn>
             </Form>      
        </Formik>
      </FormWrap>
   )
}
