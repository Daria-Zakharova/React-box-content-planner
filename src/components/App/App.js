import React, { useEffect} from "react";
import { toast} from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectError} from "redux/contacts-and-filtering/selectors";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Home } from "pages/Home";
import { LoginForm } from "pages/LogIn";
import { SignUpForm } from "pages/SignUp";
import { Contacts } from "pages/Contacts";


export const App = () => {
  const error = useSelector(selectError);
  
  useEffect(() => {
    error && toast.error(error);
  }, [error])

  return (
    <Routes>
    <Route path='/' element={<SharedLayout />}>
      <Route path='/' element={<Home />}>
        <Route path="login" element={<LoginForm/>} />
        <Route path="signUp" element={<SignUpForm/>} />
      </Route>
      <Route path="/contacts" element={<Contacts/>} />
{/*       <Route path="*" element={<PageNotFound/>}/> */} 
    </Route>
  </Routes>
  );
}

/* 
<Routes>
    <Route path='/' element={<SharedLayout />}>
      <Route path='/' element={<Home />}>
        <Route path="login" element={<Login/>} />
        <Route path="signUp" element={<SignUp/>} />
      </Route>
      <Route path="/contacts" element={<Contacts/>} />
      // <Route path="*" element={<PageNotFound/>}/>
    </Route>
  </Routes> */
/* 
    <AppCard>
      <Toaster/>
      <AppTitle>Contacts</AppTitle>
      <ContactForm/>
      <Filter />  
      <ContactList/>
    </AppCard> */