import { GreetingMsg } from "components/GreetingMsg/GreetingMsg";
import { Outlet } from "react-router-dom";

export const Home = () => {
    return (
        <>
        {/* flowerBg */}
        {/* Registration & login */}
        <Outlet/> 
        <GreetingMsg/>
        </>);
}