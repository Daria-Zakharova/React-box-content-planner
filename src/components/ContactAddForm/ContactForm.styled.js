import styled from "@emotion/styled";
import YellowNoteBg from "img/note-removebg-yellow.png";
import GreenNoteBg from "img/note-removebg-green.png";
import VioletNoteBg from "img/note-removebg-violet.png";
import { Field, ErrorMessage } from "formik";


export const FormWrap = styled.div`
    position: absolute;
    padding: 20px 40px;
    width: 330px;
    aspect-ratio: 1;
    inset: 70px 40px;
    font-size: ${({fields}) => fields === 2 ? '20px' : '16px'};
    color: #000000aa;
    background-image: ${({color}) => color === 'green' ? `url(${GreenNoteBg})`:
        color === 'violet' ? `url(${VioletNoteBg})` : `url(${YellowNoteBg})`};
    background-size: contain;
    background-repeat: no-repeat;

    h2 {
        margin-bottom: 10px;
        text-align: center;
        font-size: 20px;
        color: #000000cc;
    }

    label {
        display: block;
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

export const Input = styled(Field)`
    width: 95%;
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 1px dotted #00000066;
    font-family: 'Indie Flower', cursive;
    font-size: inherit;

    &:hover, &:focus {
        border: 1px dotted #00000066;
    }
    &:invalid {
        border: 1px dotted red;
    }
`;

export const SubmitBtn = styled.button`
    position: absolute;
    align-items: baseline;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    padding: 6px 30px;
    margin: 0 auto;
    align-self: center;
    border: 2px solid #00000022;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    background-color: transparent;
    color: #000000aa;

    &:hover {
        background-color: #8bc34a69;
        border-color:#00000033;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

    }
`;

export const ErrorNotify = styled(ErrorMessage)`
    font-weight: 400;
    font-size: 12px;
    color: red;
`;