import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "redux/auth/selectors"
import {BsPersonCircle} from "react-icons/bs"
import { UserInfo, UserMenuList } from "./UserMenu.styled";
import { logOut } from "redux/auth/operations";
import { capitalized } from "utils/formatting/capitalize";

export const UserMenu = () => {
    const username = useSelector(selectUser).name;
    const dispatch = useDispatch();

    return (<UserMenuList>
        <UserInfo color="#f9ca45"><BsPersonCircle/> {capitalized(username)}</UserInfo>
        <UserInfo className={"logout-btn"} color="#e97a7a" onClick={() => { dispatch(logOut()); }}>Log out</UserInfo>
    </UserMenuList>)
}

