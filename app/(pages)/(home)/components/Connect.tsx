import { useState } from "react";
import Image from "next/image";
import Login from "./Login";
import OTPVerification from "./OTPVerification";

interface ConnectProps {
  setOpenConnect: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDownload: React.Dispatch<React.SetStateAction<boolean>>;
}

const Connect: React.FC<ConnectProps> = ({
  setOpenConnect,
  setOpenDownload,
}) => {
  const [state, setState] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-[#00000040] z-40"></div>
      <div className="relative z-50 bg-[#030303] p-4 md:p-8 rounded-md shadow-[0px_16px_32px_0px_rgba(#00000040)] w-11/12 max-w-[480px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/icons/espn.svg" width={20} height={20} alt="tool" />
            <p className="text-[#FFFFF6] text-lg font-medium font-volksansTest">
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
        {state === "login" ? (
          <Login setState={setState} setEmail={setEmail} />
        ) : (
          <OTPVerification
            email={email}
            setOpenConnect={setOpenConnect}
            setOpenDownload={setOpenDownload}
          />
        )}
      </div>
    </div>
  );
};

export default Connect;
