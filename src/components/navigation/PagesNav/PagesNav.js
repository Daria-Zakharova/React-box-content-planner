import { nanoid } from "@reduxjs/toolkit";
import { NavList, NavSticker } from "./PagesNav.styled";

export const PagesNav = ({links}) => {

    return (
        <nav>
            <NavList color = '#5ca8bf'>
                {links.map(link => (
                    <li key ={nanoid()}>
                        <NavSticker to={link === 'home' ? '/' : `/${link}`}>{link}</NavSticker>
                    </li>))
                }
            </NavList>
        </nav>
    );
}