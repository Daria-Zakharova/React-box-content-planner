import { FormSticker } from "components/FormSticker/FormSticker";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { selectIsLoadingLogIn } from "redux/auth/selectors";
import { loginSchema } from "utils/validation";

export default function LoginForm () {
  const dispatch = useDispatch();

  const onLogin = async({email, password}) => {
    try {
      await dispatch(logIn({email, password})).unwrap();
      toast.success('Hello!');
      }
    catch (e) {
      toast.error(`Authorization failed. ${e.code === "ERR_BAD_REQUEST" ? "Invalid email or password" : e.message}`);
    }
  }

    const logInFormObj = {
      stickerColor: "green",
      formHeading: "Log in",
      submitBtnTxt: "Log in",
      validationSchema: loginSchema,
      isLoadingSelector: selectIsLoadingLogIn,
      onSubmit: onLogin,
      inputs: [
        {
          name: "email",
          type: "email",
          initialValue: "",
        },
        {
          name: "password",
          type: "password",
          initialValue: "",
        }]
    }
  
    return <FormSticker formObj={logInFormObj}/>
  }