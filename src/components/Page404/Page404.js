import { Page } from "./Page404.styled"
import img404 from 'img/404-book.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export const Page404 = ({seconds}) => {
    const [counter, setCounter] = useState(seconds);
    useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

    useEffect(() => { 
      if (counter === 0) {
        window.location = "/goit-react-hw-08-phonebook/";
      }
    }, [counter]);
    return <>
        <Page>
        <img src={img404} alt = 'Page not found' width='200'/>
        <div>Something is wrong. You happened to find an unexisting page.<br/>Don't panic! Our fastest bookworms will get you directly <Link style = {{fontWeight: 700}} to = "/">Home</Link> in {counter} seconds.</div>
        </Page>
    </>
}