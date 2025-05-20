"use client";

import { useState } from "react";
import Image from "next/image";
import Connect from "./components/Connect";
import DownloadData from "./components/DownloadData";
import Button from "../../components/Button";
import { tools, Tool } from "./tools";

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);
  const [openConnect, setOpenConnect] = useState<boolean>(false);
  const [openDownload, setOpenDownload] = useState<boolean>(false);

  return (
    <>
      {openConnect && (
        <Connect
          setOpenConnect={setOpenConnect}
          setOpenDownload={setOpenDownload}
        />
      )}
      {openDownload && <DownloadData />}
      <div className="bg-[#030303] min-h-dvh">
        <div>
          <Image
            src="/images/home-bg.png"
            className="absolute right-0 top-0 w-full h-full md:w-[60%]"
            width={0}
            height={0}
            sizes="100vw"
            alt="background"
          />
        </div>
        <div className="relative z-10">
          <div className="py-7 flex justify-center w-full">
            <Image src="/icons/logo.svg" width={120} height={14.5} alt="logo" />
          </div>
          <div className="flex flex-col justify-center items-center lg:h-[calc(100dvh-72px)] overflow-auto p-4 lg:pb-[88px]">
            <div className="max-w-[380px]">
              <div>
                <h1 className="text-2xl md:text-3xl leading-[30px] text-[#FFFFF6] mb-5 text-center font-TacticSans">
                  Select platforms to connect to Stacked
                </h1>
                <p className="text-sm md:text-base text-[#9D9D95] md:leading-6 text-center font-volksansTest">
                  Connect tools to manage your Leagues.
                </p>
                <p className="text-sm md:text-base text-[#9D9D95] md:leading-6 text-center font-volksansTest">
                  Add at least one now, you can always add more later.
                </p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                {tools.map((tool: Tool, index: number) => {
                  const isSelected = selected.includes(tool.name);
                  return (
                    <div
                      key={index}
                      className="bg-[#141414] rounded-md p-4 md:p-6 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={tool.icon}
                          width={32}
                          height={32}
                          alt={tool.name}
                        />
                        <div>
                          <p className="text-[#FFFFF6] font-volksansTest leading-[0px]">
                            {tool.name}
                          </p>
                          {tool.subtext && (
                            <p className="text-xs text-[#9D9D95] font-volksansTest leading-[0px] mt-5">
                              {tool.subtext}
                            </p>
                          )}
                        </div>
                      </div>
                      <div
                        className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] w-7 h-7 flex justify-center items-center rounded cursor-pointer"
                        onClick={() => {
                          if (isSelected) {
                            setSelected((prev) =>
                              prev.filter((i) => i !== tool.name)
                            );
                          } else {
                            setSelected((prev) => [...prev, tool.name]);
                          }
                        }}
                      >
                        <Image
                          src={
                            isSelected ? "/icons/check.svg" : "/icons/plus.svg"
                          }
                          width={16}
                          height={16}
                          alt="status"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pb-4">
                <Button
                  handleClick={() => {
                    setOpenConnect(true);
                  }}
                  disabled={selected.length === 0}
                  text={
                    selected.length > 0
                      ? "Continue"
                      : "Add at least one platform to Continue"
                  }
                  type="button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
