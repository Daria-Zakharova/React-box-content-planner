import styled from "@emotion/styled";

export const Controls = styled.ul`
    position: absolute;
    right: 0;
    display: none;
`;

export const ControlBtn = styled.button`
    background-color: transparent;
    border: none;
    display: none;      

&:first-of-type{    
    display: inherit;
    position: absolute;
    right: 25px;
}

&:last-of-type{    
    display: inherit;
    position: absolute;
    right: 0;    
}

&:disabled {
        svg {
            fill: grey;
        }
    }
`;