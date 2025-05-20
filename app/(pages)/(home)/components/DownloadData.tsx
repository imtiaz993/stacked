import Image from "next/image";
import { useState } from "react";

const DownloadData = () => {
  const [states, setStates] = useState([
    {
      name: "Finding Active Slates",
      subText: "4 leagues found",
      status: "inprogress",
      tasks: [
        {
          name: "League Delta",
          status: "completed",
          completedPercentage: 100,
          timeLeft: 0,
        },
        {
          name: "League Alpha",
          status: "inprogress",
          completedPercentage: 64,
          timeLeft: 15,
        },
      ],
    },
  ]);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-[#00000040] z-40"></div>
      <div className="relative z-50 bg-[#030303] p-4 md:p-8 rounded-md shadow-[0px_16px_32px_0px_rgba(#00000040)] w-11/12 max-w-[480px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/icons/espn.svg" width={20} height={20} alt="tool" />
            <p className="text-[#FFFFF6] text-lg font-medium font-volksansTest">
              Downloading data
            </p>
          </div>
        </div>
        <div className="my-8">
          <div className="bg-[#141414] rounded-md p-4 md:p-6 flex items-center justify-between">
            <div>
              <p className="text-[#B5FF4D] font-volksansTest leading-[0px]">
                tool.name
              </p>
              <p className="text-xs text-[#9D9D95] font-volksansTest leading-[0px] mt-5">
                tool.subtext
              </p>
            </div>
            <div className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] w-8 h-8 flex justify-center items-center rounded cursor-pointer">
              <Image
                src={true ? "/icons/check.svg" : "/icons/plus.svg"}
                width={16}
                height={16}
                alt="status"
              />
            </div>
          </div>
        </div>
        <p className="text-[#9D9D95] text-sm text-center font-volksansTest">
          We’ll redirect you once done.
        </p>
      </div>
    </div>
  );
};

export default DownloadData;
