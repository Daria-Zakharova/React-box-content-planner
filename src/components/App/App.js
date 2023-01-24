import React, { useEffect} from "react";
import { toast} from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectError} from "redux/contacts-and-filtering/selectors";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Home } from "pages/Home";
import { LoginForm } from "pages/LogIn";
import { SignUpForm } from "pages/SignUp";
import { Contacts } from "pages/Contacts";
import { refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "components/Routes/RestrictedRoute";
import { PrivateRoute } from "components/Routes/PrivateRoute";
import { selectAuthError } from "redux/auth/selectors";


export const App = () => {
  const error = useSelector(selectError);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    error && toast.error(`Sorry. ${error}`);
    authError && toast.error(`Authorization failed. ${authError}`);
  }, [error, authError])

  return (
    <Routes>
    <Route path='/' element={<SharedLayout />}>
      <Route path='/' element={<Home />}>
        <Route path="login" element={<RestrictedRoute component={<LoginForm/>}/>} />
        <Route path="signup" element={<RestrictedRoute component={<SignUpForm/>}/>} />
      </Route>
      <Route path="/contacts" element={<PrivateRoute component = {<Contacts/>}/>} />
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