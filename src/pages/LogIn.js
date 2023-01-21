import { SubmitBtn, ErrorNotify, FormWrap, Input } from "components/ContactAddForm/ContactForm.styled"
import { Formik, Form} from "formik"
// import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
// import { logIn } from "redux/auth/operations";
// import { selectUser } from "redux/auth/selectors";
import { loginSchema } from "utils/validation";

export const LoginForm = () => {
    const isLoading = false;
/*     const dispatch = useDispatch();
    const user = selectUser();
    const onLogIn = async ({email, password}, resetForm) => {
        console.log(user);
        await dispatch(logIn({email, password}));
        console.log(user);
    } */

    return (<FormWrap color = 'green' fields = {2}>
        <h2>Log in</h2>
      <Formik
          initialValues={{
              email: '',
              password: '',
          }}
           validationSchema ={loginSchema}
          onSubmit={() => {console.log('logged in');}} 
       >      
           <Form>
             <label>Email
               <Input
                 type="email"
                 name="email"
               />
               <ErrorNotify name="email" component={"span"} />
             </label>
             <label>Password
               <Input
                 type="password"
                 name="password"
               />
               <ErrorNotify name="password" component={"span"} />
             </label>
             <SubmitBtn type="submit" disabled={isLoading}>Add <BeatLoader loading={isLoading} color="#000a" size={3} speedMultiplier={0.7} cssOverride={{
    bottom: 4,
    position: 'absolute',
    right: 6
  }}/></SubmitBtn>
           </Form>      
      </Formik>
    </FormWrap>)
}