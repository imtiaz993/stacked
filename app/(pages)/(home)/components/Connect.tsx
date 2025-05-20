import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

const Connect = ({ setOpenConnect }) => {
  const [state, setState] = useState("login");

  const Login = () => {
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
        setState("otp");
      },
    });
    return (
      <div className="mt-8">
        <div className="mb-5 flex flex-col gap-3">
          <div className="bg-[#FFFFFF1A] rounded flex items-center gap-2 p-2.5">
            <Image src="/icons/email.svg" width={20} height={20} alt="email" />
            <input
              placeholder="Email address"
              type="email"
              autoComplete="off"
              {...loginForm.getFieldProps("email")}
              className="outline-none bg-transparent w-full text-[#FFFFF6] placeholder:text-[#9D9D95]"
            />
          </div>
          <div className="bg-[#FFFFFF1A] rounded flex items-center gap-2 p-2.5">
            <Image
              src="/icons/lock.svg"
              width={20}
              height={20}
              alt="password"
            />
            <input
              placeholder="Password"
              type="password"
              autoComplete="off"
              {...loginForm.getFieldProps("password")}
              className="outline-none bg-transparent w-full text-[#FFFFF6] placeholder:text-[#9D9D95]"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={() => {
            loginForm.handleSubmit();
          }}
          disabled={!loginForm.isValid || !loginForm.dirty}
          className={`rounded font-medium leading-5 px-5 w-full min-h-[48px] ${
            loginForm.isValid && loginForm.dirty
              ? "text-[#030303] bg-[#B5FF4D]"
              : "text-[#666662] bg-[#FFFFFF1A] border border-[#FFFFFF33]"
          }`}
        >
          Sign in
        </button>
      </div>
    );
  };

  const OTP = () => {
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
          <p className="text-sm md:text-base text-[#9D9D95] mb-6">
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
                className="bg-[#FFFFFF1A] outline-none rounded p-2.5 h-16 md:h-20 text-[#FFFFF6] text-[40px] text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-[#00000080] z-40"></div>
      <div className="relative z-50 bg-[#030303] p-4 md:p-8 rounded-md shadow-[0px_16px_32px_0px_rgba(#000/25)] w-11/12 max-w-[480px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/icons/espn.svg" width={20} height={20} alt="tool" />
            <p className="text-[#FFFFF6] text-lg font-medium">
              Connecting ESPN
            </p>
          </div>
          <div>
            <Image
              src="/icons/cross.svg"
              width={16}
              height={16}
              alt="cross"
              className="cursor-pointer"
              onClick={() => {
                setOpenConnect(false);
              }}
            />
          </div>
        </div>
        {state === "login" ? <Login /> : <OTP />}
      </div>
    </div>
  );
};

export default Connect;
