import React, { lazy, useEffect} from "react";
import { toast} from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectError} from "redux/contacts-and-filtering/selectors";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "components/Routes/RestrictedRoute";
import { PrivateRoute } from "components/Routes/PrivateRoute";
import { selectIsRefreshing } from "redux/auth/selectors"
import PageNotFound from "pages/PageNotFound";

const Home = lazy(() => import('pages/Home'));
const LoginForm = lazy(() => import('pages/LogIn'));
const SignUpForm = lazy(() => import('pages/SignUp'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    error && toast.error(`Sorry. ${error}`);
  }, [error, ])

  return !isRefreshing ? <Routes>
    <Route path='/' element={<SharedLayout />}>
      <Route path='/' element={<Home />}>
        <Route path="login" element={<RestrictedRoute component={<LoginForm/>}/>} />
        <Route path="signup" element={<RestrictedRoute component={<SignUpForm/>}/>} />
      </Route>
      <Route path="/contacts" element={<PrivateRoute component = {<Contacts/>}/>} />
    </Route>
    <Route path="*" element={<PageNotFound/>}/>  
  </Routes> : <div>Refreshing user...</div>;
}