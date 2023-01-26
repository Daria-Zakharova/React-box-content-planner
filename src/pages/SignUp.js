import { FormSticker } from "components/FormSticker/FormSticker";
import { toast } from "react-hot-toast";
import { useDispatch} from "react-redux";
import { signUp } from "redux/auth/operations";
import { selectIsLoadingSignUp } from "redux/auth/selectors";
import { signUpSchema } from "utils/validation";

export default function SignUpForm() {
    const dispatch = useDispatch();

    const onSignUp = async ({name, email, password}) => {
      try {
        await dispatch(signUp({name, email, password})).unwrap();
        toast.success(`User ${name} was registered`);
      }
      catch (e) {
        toast.error(`Authorization failed. ${e.code === "ERR_BAD_REQUEST" ? "The email is already registered." : e.message}`);
      }
    }

    const signUpFormObj = {
      stickerColor: "violet",
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