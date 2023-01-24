import styled from "@emotion/styled";
import { Form } from "formik";

export const FormStyled = styled(Form)`
    width: 480px;
    display: flex;
    align-items: start;
    margin-bottom: -2px;

    input {
        padding: 0;
    }

    label:first-of-type {
        input{
            margin-right: 30px;
            font-weight: 700;
        }
    }
    label:last-of-type {
        input {
            width: 100%;
            text-align: right;
        }
    }

    input {    
        background-color: transparent;     
        width: fit-content;
        font-family: inherit;
        font-size: 22px;
        line-height: 31px;
        border: none;
        border-bottom: dotted 2px black;
        color: ${({submitting}) => submitting === "true" ? 'green' : 'inherit'}
    }
    
    button {
        background-color: transparent;
        border: none;
    }
`;