import { AppCard } from "./SharedLayout.styled"
import { AsideNavWrap } from "components/navigation/AsideNavWrap/AsideNavWrap"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsRefreshing } from "redux/auth/selectors"

export const SharedLayout = () => {
    const isRefreshing = useSelector(selectIsRefreshing);
    return (
        <AppCard>
            <Toaster/>
            {!isRefreshing && 
            <>
                <AsideNavWrap/>                       
                <Outlet/>
            </>}
        </AppCard>
    );
}