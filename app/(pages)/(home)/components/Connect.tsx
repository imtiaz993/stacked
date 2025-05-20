import { useState } from "react";
import Image from "next/image";

const Connect = () => {
  const [state, setState] = useState("login");
  const Login = () => (
    <div className="mt-8">
      <div className="mb-5 flex flex-col gap-3">
        <div className="bg-[#FFFFFF1A] rounded flex items-center gap-2 p-2.5">
          <Image src="/icons/email.svg" width={20} height={20} alt="email" />
          <input
            placeholder="Email address"
            type="email"
            autoComplete="off"
            className="outline-none bg-transparent w-full text-[#FFFFF6] placeholder:text-[#9D9D95]"
          />
        </div>
        <div className="bg-[#FFFFFF1A] rounded flex items-center gap-2 p-2.5">
          <Image src="/icons/lock.svg" width={20} height={20} alt="password" />
          <input
            placeholder="Password"
            type="password"
            autoComplete="off"
            className="outline-none bg-transparent w-full text-[#FFFFF6] placeholder:text-[#9D9D95]"
          />
        </div>
      </div>
      <button
        className={`rounded  font-medium leading-5 px-5 w-full min-h-[48px] ${
          true
            ? "text-[#030303] bg-[#B5FF4D]"
            : "text-[#666662] bg-[#FFFFFF1A] border border-[#FFFFFF33]"
        }`}
        onClick={() => {
          setState("otp");
        }}
      >
        Sign in
      </button>
    </div>
  );
  const OTP = () => (
    <div className="mt-8">
      <div>
        <p className="text-sm md:text-base text-[#9D9D95] mb-6">
          Enter a 6-digit code sent to email@address.com
        </p>
        <div className="grid grid-cols-6 gap-2">
          <input
            type="number"
            className="bg-[#FFFFFF1A] outline-none rounded p-2.5 h-16 md:h-20 text-[#FFFFF6] text-[40px] text-center"
          />
           <input
            type="number"
            className="bg-[#FFFFFF1A] outline-none rounded p-2.5 h-16 md:h-20 text-[#FFFFF6] text-[40px] text-center"
          />
           <input
            type="number"
            className="bg-[#FFFFFF1A] outline-none rounded p-2.5 h-16 md:h-20 text-[#FFFFF6] text-[40px] text-center"
          />
           <input
            type="number"
            className="bg-[#FFFFFF1A] outline-none rounded p-2.5 h-16 md:h-20 text-[#FFFFF6] text-[40px] text-center"
          />
           <input
            type="number"
            className="bg-[#FFFFFF1A] outline-none rounded p-2.5 h-16 md:h-20 text-[#FFFFF6] text-[40px] text-center"
          />
           <input
            type="number"
            className="bg-[#FFFFFF1A] outline-none rounded p-2.5 h-16 md:h-20 text-[#FFFFF6] text-[40px] text-center"
          />
        </div>
      </div>
    </div>
  );
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
            />
          </div>
        </div>
        {state == "login" ? <Login /> : <OTP />}
      </div>
    </div>
  );
};

export default Connect;
