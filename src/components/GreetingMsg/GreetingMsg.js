import { PageHeading } from "components/Heading/Heading";
import { Greeting } from "./GreetingMsg.styled";
import BookImg from "img/cute-blue-book.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn, selectUser } from "redux/auth/selectors";
import { useEffect, useState } from "react";
import { capitalized } from "utils/formatting/capitalize";

export const GreetingMsg = () => {
    const heading = "Hello! I'm your new phonebook";
    const isLoggedIn = useSelector(selectLoggedIn);
    const [username, setUsername] = useState('');
    const newName =  useSelector(selectUser);
    useEffect(() => {
        !username && setUsername(newName);
    }, [newName, username]);

    const messageColumn = (<p>Hi! I am still a little pet project, but I am growing and developing to be simple to use and simply useful.<br/></p>);
    const message = (<p>Now you don't need to loose all those scraps of paper with Very Important Contacts any more, just <Link to="signup">tell me your name</Link>, add your data to the Contacts page, then don't add me to the bookmarks and I'll get them lost for you. <br/><br/> P.S But I'll keep remembering everything you tell me in case you ever <Link to="login">come back.</Link></p>);
    const messageColumnForUser = (<p> Nice to meet you, {username ? capitalized(username) : 'Username'}! <br/>What time is it? Because it seems like a good time to write down all your <Link to="/contacts">Contacts</Link>.</p>);

    return (
        <>
            <PageHeading text = {heading}/>
            <Greeting>                
                <div style={{display: "flex", alignItems: "end"}}> {isLoggedIn ? messageColumnForUser : messageColumn} <img src = {BookImg} alt = "Cute book with happy face wearing glasses" width={150}/></div>
                {!isLoggedIn && message}    
            </Greeting>
        </>
    );
}