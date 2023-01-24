import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { selectLoggedIn } from "redux/auth/selectors"
import { AuthNav } from "../AuthNav/AuthNav"
import { PagesNav } from "../PagesNav/PagesNav"
import { AsideNav } from "./AsideNavWrap.styled"

export const AsideNavWrap = () => {

    const isLoggedIn = useSelector(selectLoggedIn);
    return (
        <AsideNav>
            {!isLoggedIn ? <AuthNav links = {isLoggedIn ? ['logOut'] : ['login', 'signup']}/> : <UserMenu/>}
            <PagesNav links = {isLoggedIn ? ['home', 'contacts'] : ['home']}/>
        </AsideNav>
    )
}