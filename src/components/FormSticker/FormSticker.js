import { capitalized } from "utils/formatting/capitalize";
import { ErrorNotify, FormWrap, Input, SubmitBtn } from "./FormSticker.styled";
import { Formik, Form} from "formik";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { nanoid } from "@reduxjs/toolkit";

export const FormSticker = ({formObj}) => {
     /* stickerColor: default, violet, green 
    fields: 2-3 
    onSubmit: function
    isLoadingSelector: selectorFunction
    validationSchema
    submitBtnText
    inputs: [{name, type, initialValue}]
     */
    const {stickerColor, fieldsAmount, formHeading, submitBtnTxt, validationSchema, isLoadingSelector, onSubmit, inputs} = formObj;
    const isLoading = useSelector(isLoadingSelector);

 
    return (
      <FormWrap color = {stickerColor} fields={fieldsAmount}>
        <h2>{formHeading}</h2>
        <Formik
            initialValues={inputs.reduce((values, {name, initialValue}) => {values[name] = initialValue; return values}, {})}
            validationSchema ={validationSchema}
            onSubmit={onSubmit}
         >      
             <Form> {inputs.map(({name, type}) => <label key = {nanoid()}>{capitalized(name)}<Input type ={type} name = {name}/> <ErrorNotify name = {name} component = {"span"}/> </label>)}

               <SubmitBtn type="submit" disabled={isLoading}>{submitBtnTxt}<BeatLoader loading={isLoading} color="#000a" size={3} speedMultiplier={0.7} cssOverride={{
      bottom: 4,
      position: 'absolute',
      right: 6
    }}/></SubmitBtn>
             </Form>      
        </Formik>
      </FormWrap>
   )
}
