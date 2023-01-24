import { FormSticker } from "components/FormSticker/FormSticker";
import { toast } from "react-hot-toast";
import { useDispatch} from "react-redux";
import { signUp } from "redux/auth/operations";
import { selectIsLoadingSignUp } from "redux/auth/selectors";
import { signUpSchema } from "utils/validation";

export const SignUpForm = () => {
    const dispatch = useDispatch();
    const onSignUp = async ({name, email, password}, {resetForm}) => {
        await dispatch(signUp({name, email, password}));
        resetForm();
        toast.success(`User ${name} was registered`);
    }

    const signUpFormObj = {
      stickerColor: "violet",
      fields: 3,
      formHeading: "Register",
      submitBtnTxt: "Submit",
      validationSchema: signUpSchema,
      isLoadingSelector: selectIsLoadingSignUp,
      onSubmit: onSignUp,
      inputs: [
        {
          name: "name",
          type: "text",
          initialValue: "",
        },
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
  
    return <FormSticker formObj={signUpFormObj}/>
  }