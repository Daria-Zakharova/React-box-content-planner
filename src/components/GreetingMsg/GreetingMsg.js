import { PageHeading } from "components/Heading/Heading";
import { Greeting } from "./GreetingMsg.styled";
import BookImg from "img/cute-blue-book.png";
import { Link } from "react-router-dom";

export const GreetingMsg = () => {
    const heading = "Hello! I'm your new phonebook";
    const message = (<p>Nice to meet you, Username! <br/> <br/> I am growing and developing to be <br/>simple to use and simply useful. <br/><br/>Now you don't need to loose all those scraps of paper with Very Important Contacts yourself any more, just <Link to="signup">tell me your name</Link> and add them to the Contacts page, then don't put me to the bookmarks and I'll get them lost for you. <br/><br/> P.S But I'll keep remembering everything you tell me in case you ever <Link to="login">come back.</Link></p>);

    return (
        <>
            <PageHeading text = {heading}/>
            <Greeting>                
                <img src = {BookImg} alt = "Cute book with happy face wearing glasses" width={150}/>
                {message}    
            </Greeting>
        </>
    );
}