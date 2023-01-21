import { SubmitBtn, ErrorNotify, FormWrap, Input } from "components/ContactAddForm/ContactForm.styled"
import { Formik, Form} from "formik"
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { signUp } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import { signUpSchema } from "utils/validation";

export const SignUpForm = () => {
    const dispatch = useDispatch();
    const isLoading = false;
    const user = useSelector(selectUser);
    const onSignUp = async ({name, email, password}, resetForm) => {
        console.log(user);
        await dispatch(signUp({email, password}));
        console.log(user);
    }
    return <FormWrap color='violet' fields = {3}>
        <h2>Register</h2>
      <Formik
          initialValues={{
              name: '',
              email: '',
              password: '',
          }}
           validationSchema ={signUpSchema}
          onSubmit={onSignUp} 
       >      
           <Form>
             <label>Name
               <Input
                 type="text"
                 name="name"
               />
               <ErrorNotify name="name" component={"span"}/>
             </label>
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

    </FormWrap>
}