import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`

@keyframes slide-left {
    1% {
        box-shadow: none;
        transform: translateX(0);
        background-image: linear-gradient(to right, transparent 0, transparent 30px, var(--color-bg) 30px);
    }
    10% {
        box-shadow: none;
        transform: translateX(3px);
        background-image: linear-gradient(to right, transparent 0, transparent 27px, var(--color-bg) 27px);
    }
    20% {
        box-shadow: none;
        transform: translateX(6px);
        background-image: linear-gradient(to right, transparent 0, transparent 24px, var(--color-bg) 24px);
    }
    30% {
        box-shadow: none;
        transform: translateX(9px);
        background-image: linear-gradient(to right, transparent 0, transparent 21px, var(--color-bg) 21px);
    }
    40% {
        box-shadow: none;
        transform: translateX(12px);
        background-image: linear-gradient(to right, transparent 0, transparent 18px, var(--color-bg) 18px);
    }
    50% {
        box-shadow: none;
        transform: translateX(15px);
        background-image: linear-gradient(to right, transparent 0, transparent 15px, var(--color-bg) 15px);
    }
    60% {
        box-shadow: none;
        transform: translateX(18px);
        background-image: linear-gradient(to right, transparent 0, transparent 12px, var(--color-bg) 12px);
    }
    70% {
        box-shadow: none;
        transform: translateX(21px);
        background-image: linear-gradient(to right, transparent 0, transparent 9px, var(--color-bg) 9px);
    }
    80% {
        box-shadow: 1px 1px 1px #0001;;
        transform: translateX(24px);
        background-image: linear-gradient(to right, transparent 0, transparent 6px, var(--color-bg) 6px);
    }
    90% {
        box-shadow: 1px 2px 2px #0002;;
        transform: translateX(27px);
        background-image: linear-gradient(to right, transparent 0, transparent 3px, var(--color-bg) 3px);
    }
    100% {
        background-image: linear-gradient(to right, transparent 0, var(--color-bg) 0, var(--color-bg) 100%);
        box-shadow: 1px 2px 2px #0003;
        transform: translateX(30px);;
    }    
}

--color-bg: ${({color}) => color};
width: 150px;
display: flex;
flex-direction: column;
gap: 20px;
`;

export const NavSticker = styled(NavLink)`
    display: block;
    padding: 20px 20px 20px 50px;
    border-radius: 0 10px 10px 0;
    
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
    transition: transform 300ms linear;
    box-shadow: none;
    transform: translateX(0);
    background-image: linear-gradient(to right, transparent 0, transparent 30px, var(--color-bg) 30px);
    transition: filter 200ms linear;

    &.active {
        animation: slide-left 250ms forwards;       
    }

    &:hover {
        filter: saturate(2.5);
        text-decoration: underline;
    }

`;