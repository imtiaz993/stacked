import { useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const OTPVerification = ({ setOpenConnect, setOpenDownload }) => {
  const otpRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const otpSchema = Yup.object().shape({
    otp1: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp2: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp3: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp4: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp5: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
    otp6: Yup.string().matches(/^\d$/, "One digit only").required("Required"),
  });

  const otpForm = useFormik({
    initialValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
    validationSchema: otpSchema,
    onSubmit: (values) => {
      console.log("OTP Submitted:", values);
      setOpenConnect(false);
      setOpenDownload(true);
    },
  });

  useEffect(() => {
    otpRefs[0].current.focus();
    otpRefs.forEach((ref, index) => {
      const input = ref.current;
      if (input) {
        input.addEventListener("input", (e) => {
          const value = e.target.value;
          if (value.length === 1 && index < 5) {
            otpRefs[index + 1].current.focus();
          }
        });
        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && !input.value && index > 0) {
            otpRefs[index - 1].current.focus();
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
        <p className="text-sm md:text-base text-[#9D9D95] mb-6 font-volksansTest">
          Enter a 6-digit code sent to email@address.com
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
              {...otpForm.getFieldProps(key)}
              className="bg-[#FFFFFF1A] font-volksansTest outline-none rounded p-2.5 h-16 md:h-20 text-[#FFFFF6] text-[40px] text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
