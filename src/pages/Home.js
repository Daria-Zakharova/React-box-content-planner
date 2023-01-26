import { GreetingMsg } from "components/GreetingMsg/GreetingMsg";
import { Outlet } from "react-router-dom";

export default function Home () {
    return (
        <>
            <Outlet/> 
            <GreetingMsg/>
        </>
    );
}