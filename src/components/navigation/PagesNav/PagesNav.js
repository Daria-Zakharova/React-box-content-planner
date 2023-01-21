import { nanoid } from "@reduxjs/toolkit";
import { NavLink} from "react-router-dom";
import { NavList } from "./PagesNav.styled";

export const PagesNav = ({links}) => {

    return (
        <nav>
            <NavList color = '#5ca8bf'>
                {links.map(link => (
                    <li key ={nanoid()}>
                        <NavLink to={link === 'home' ? '/' : `/${link}`}>{link}</NavLink>
                    </li>))
                }
            </NavList>
        </nav>
    );
}