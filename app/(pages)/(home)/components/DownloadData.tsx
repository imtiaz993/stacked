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
      <div className="fixed inset-0 bg-overlay-dark z-40"></div>
      <div className="relative z-50 bg-primary-dark p-4 md:p-8 rounded-md shadow-[0px_16px_32px_0px_rgba(#00000040)] w-11/12 max-w-[480px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/icons/espn.svg" width={20} height={20} alt="tool" />
            <p className="text-light text-lg font-medium font-volksansTest">
              Downloading data
            </p>
          </div>
        </div>
        <div className="my-8">
          <div className="bg-secondary-dark rounded-md p-4 md:p-6 flex items-center justify-between">
            <div>
              <p className="text-accent-green font-volksansTest leading-[0px]">
                tool.name
              </p>
              <p className="text-xs text-muted font-volksansTest leading-[0px] mt-5">
                tool.subtext
              </p>
            </div>
            <div className="bg-muted-white border border-muted-white w-8 h-8 flex justify-center items-center rounded cursor-pointer">
              <Image
                src={true ? "/icons/check.svg" : "/icons/plus.svg"}
                width={16}
                height={16}
                alt="status"
              />
            </div>
          </div>
        </div>
        <p className="text-muted text-sm text-center font-volksansTest">
          We’ll redirect you once done.
        </p>
      </div>
    </div>
  );
};

export default DownloadData;
