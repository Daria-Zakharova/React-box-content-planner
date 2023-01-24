import { FormSticker } from "components/FormSticker/FormSticker";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "redux/auth/operations";
import { selectIsLoadingLogIn, selectUser } from "redux/auth/selectors";
import { capitalized } from "utils/formatting/capitalize";
import { loginSchema } from "utils/validation";

export default function LoginForm () {
  const dispatch = useDispatch();
  const username = useSelector(selectUser).name;
  const [name, setName] = useState('');

  useEffect(() => {
    username && setName(username)
  }, [username]);

  const onLogin = async({email, password}) => {
    await dispatch(logIn({email, password}));
    name && toast.success(`Hello, ${capitalized(name)}`);
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