import styled from "@emotion/styled";
import Doodles from "img/leaves.png"


export const AppCard = styled.div`
position: relative;
width: 50vw;
height: 90vh;
margin: 5vh auto;
min-width: 320px;
max-width: 900px;
min-height: 600px;
font-size: 16px;
background-image:  url(${Doodles}), linear-gradient(to bottom, white 34px, transparent 35px, transparent calc(100% - 36px), white calc(100% - 35px)), linear-gradient(to right, white 3%, transparent 10%, transparent 90%, white 97%) ,repeating-linear-gradient(to bottom, white 1px, #357487 1px, white 2px, white 32px);
background-repeat: repeat-y, no-repeat, no-repeat, no-repeat; 
background-position-x: -60px, left, left, left;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;