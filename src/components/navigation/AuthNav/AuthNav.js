import { nanoid } from "@reduxjs/toolkit";
import { NavLink } from "react-router-dom";
import { NavList } from "../PagesNav/PagesNav.styled";

export const AuthNav = ({links}) => {
    return (
        <div>
            <NavList color='#82e682'>
                {links.map(link => (
                    <li key = {nanoid()}>
                        <NavLink to={link === 'home' ? '/' : `/${link}`}>{link}</NavLink>
                    </li>))
                }
            </NavList>
        </div>
    );
}