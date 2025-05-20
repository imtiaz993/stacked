import { useFormik, FormikValues, FieldInputProps } from "formik";
import * as Yup from "yup";
import InputField from "../../../components/InputField";
import Button from "../../../components/BUtton";

interface LoginProps {
  setState: React.Dispatch<React.SetStateAction<"login" | "otp">>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ setState, setEmail }) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const loginForm = useFormik<LoginFormValues>({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values: LoginFormValues) => {
      setEmail(values.email);
      setState("otp");
    },
  });

  return (
    <div className="mt-8">
      <div className="mb-5 flex flex-col gap-3">
        <InputField
          prefix="/icons/email.svg"
          placeholder="Email address"
          type="email"
          props={loginForm.getFieldProps("email") as FieldInputProps<string>}
          showError={Boolean(loginForm.touched.email && loginForm.errors.email)}
          error={loginForm.errors.email}
        />
        <InputField
          prefix="/icons/lock.svg"
          placeholder="Password"
          type="password"
          props={loginForm.getFieldProps("password") as FieldInputProps<string>}
          showError={Boolean(
            loginForm.touched.password && loginForm.errors.password
          )}
          error={loginForm.errors.password}
        />
      </div>

      <Button
        handleClick={() => {
          loginForm.handleSubmit();
        }}
        disabled={!loginForm.isValid || !loginForm.dirty}
        text="Sign in"
        type="submit"
      />
    </div>
  );
};

export default Login;
