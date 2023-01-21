import { AppCard } from "./SharedLayout.styled"
import { AsideNavWrap } from "components/navigation/AsideNavWrap/AsideNavWrap"
import { useEffect } from "react"
import { toast, Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { selectError } from "redux/contacts-and-filtering/selectors"

export const SharedLayout = () => {
    const error = useSelector(selectError);
  
    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    return (
        <AppCard>
            <Toaster/>
            <AsideNavWrap/>                       
            <Outlet/>
        </AppCard>
    );
}