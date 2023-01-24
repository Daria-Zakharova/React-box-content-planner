import { nanoid } from "@reduxjs/toolkit";
import { NavList, NavSticker } from "../PagesNav/PagesNav.styled";

export const AuthNav = ({links}) => {
    return (
        <div>
            <NavList color='#82e682'>               
                {(links.map(link => (
                    <li key = {nanoid()}>
                        <NavSticker to={link === 'home' ? '/' : `/${link}`}>{link}</NavSticker>
                    </li>)))
                }
            </NavList>
        </div>
    );
}