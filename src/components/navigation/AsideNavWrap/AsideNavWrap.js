import { AuthNav } from "../AuthNav/AuthNav"
import { PagesNav } from "../PagesNav/PagesNav"
import { AsideNav } from "./AsideNavWrap.styled"

export const AsideNavWrap = () => {
    return (
    <AsideNav>
        <PagesNav links = {['home', 'contacts']}/>
        <AuthNav links = {['login', 'signUp']}/>
    </AsideNav> )
}