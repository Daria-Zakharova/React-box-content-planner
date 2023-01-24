import styled from "@emotion/styled";
import { Form } from "formik";

export const FormStyled = styled(Form)`
    width: 480px;
    display: flex;
    align-items: start;
    margin-bottom: -2px;

    input {
        padding: 0;

        &:hover, &:focus {
            outline: 1px dotted #00000066;
        }
        &:invalid {
            border: 1px dotted red;
        }
    }

    label:first-of-type {
        input{
            margin-right: 20px;
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
        border-bottom: dotted 1px black;
        color: ${({submitting}) => submitting === "true" ? 'green' : 'inherit'}
    }
    
    button {
        background-color: transparent;
        border: none;
    }

    span {
        position: absolute;
        top: 100%;
        z-index: 1;
        display: block;
        padding: 3px;
        font-family: Roboto;
        font-size: 12px;
        line-height: 1;
        box-shadow: 0 1px 3px grey;
        background-color: white;
        color: red;
    }
`;