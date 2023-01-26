import { useDispatch, useSelector } from "react-redux"
import { selectIsLoadingLogOut, selectUser } from "redux/auth/selectors"
import {BsPersonCircle} from "react-icons/bs"
import { UserInfo, UserMenuList } from "./UserMenu.styled";
import { logOut } from "redux/auth/operations";
import { capitalized } from "utils/formatting/capitalize";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const username = useSelector(selectUser);
    const loadingStatus = useSelector(selectIsLoadingLogOut);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => { setIsLoading(loadingStatus)}, [loadingStatus, isLoading]);

    return (<UserMenuList>
        <UserInfo color="#f9ca45"><BsPersonCircle/> {capitalized(username)}</UserInfo>
        <UserInfo as="button" className={"logout-btn"} color="#e97a7a" onClick={() => { dispatch(logOut()); }}>Log out <BeatLoader loading={isLoading} size={3} speedMultiplier={0.7} cssOverride={{
      bottom: 22,
      position: 'absolute',
      right: 2
    }}/></UserInfo>
    </UserMenuList>)
}

