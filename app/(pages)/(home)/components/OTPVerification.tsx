import { useRef, useEffect } from "react";
import { useFormik, FieldInputProps } from "formik";
import * as Yup from "yup";

interface OTPVerificationProps {
  email: string;
  setOpenConnect: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDownload: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OTPFormValues {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
  otp6: string;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  email,
  setOpenConnect,
  setOpenDownload,
}) => {
  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const otpSchema = Yup.object().shape({
    otp1: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp2: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp3: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp4: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp5: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp6: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
  });

  const otpForm = useFormik<OTPFormValues>({
    initialValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
    validationSchema: otpSchema,
    onSubmit: (values: OTPFormValues) => {
      console.log("OTP Submitted:", values);
      setOpenConnect(false);
      setOpenDownload(true);
    },
  });

  useEffect(() => {
    otpRefs[0].current?.focus();
    otpRefs.forEach((ref, index) => {
      const input = ref.current;
      if (input) {
        input.addEventListener("input", (e: Event) => {
          const target = e.target as HTMLInputElement;
          const value = target.value;
          if (value.length === 1 && index < 5) {
            otpRefs[index + 1].current?.focus();
          }
        });
        input.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Backspace" && !input.value && index > 0) {
            otpRefs[index - 1].current?.focus();
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    const values = otpForm.values;
    if (
      values.otp1 &&
      values.otp2 &&
      values.otp3 &&
      values.otp4 &&
      values.otp5 &&
      values.otp6
    ) {
      otpForm.submitForm();
    }
  }, [otpForm.values]);

  return (
    <div className="mt-8">
      <div>
        <p className="text-sm md:text-base text-muted mb-6 font-volksansTest">
          Enter a 6-digit code sent to {email}
        </p>
        <div className="grid grid-cols-6 gap-2">
          {Object.keys(otpForm.values).map((key, index) => (
            <input
              key={key}
              ref={otpRefs[index]}
              type="number"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]*"
              {...(otpForm.getFieldProps(key) as FieldInputProps<string>)}
              className="bg-muted-white font-volksansTest outline-none rounded p-2.5 h-16 md:h-20 text-light text-3xl md:text-[40px] text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
