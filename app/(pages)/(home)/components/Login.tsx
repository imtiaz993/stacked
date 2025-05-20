import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/BUtton";
import InputField from "../../../components/InputField";

const Login = ({ setState, setEmail }) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const loginForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setEmail(values.email)
      setState("otp");
    },
  });
  return (
    <div className="mt-8">
      <div className="mb-5 flex flex-col gap-3">
        <InputField
          prefix={"/icons/email.svg"}
          placeholder="Email address"
          type="email"
          props={loginForm.getFieldProps("email")}
          showError={loginForm.touched.email && loginForm.errors.email}
          error={loginForm.errors.email}
        />
        <InputField
          prefix={"/icons/lock.svg"}
          placeholder="Password"
          type="password"
          props={loginForm.getFieldProps("password")}
          showError={loginForm.touched.password && loginForm.errors.password}
          error={loginForm.errors.password}
        />
      </div>

      <Button
        handleClick={() => {
          loginForm.handleSubmit();
        }}
        disabled={!loginForm.isValid || !loginForm.dirty}
        text={"Sign in"}
        type={"submit"}
      />
    </div>
  );
};

export default Login;
