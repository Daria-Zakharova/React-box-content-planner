import { AppCard } from "./SharedLayout.styled"
import { AsideNavWrap } from "components/navigation/AsideNavWrap/AsideNavWrap"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
import { Suspense } from "react"


export const SharedLayout = () => {
    return (
        
        <AppCard>
            <Toaster/>
            <AsideNavWrap/>                       
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </AppCard>
        
    );
}