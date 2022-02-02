import React from "react";

const IsOnline = () => {
  return (
    <div className="flex h-full w-full justify-center items-center ">
      <div className=" mt-[15rem]">
        <span className="capitalize text-lg text-gray-600 font-bold mb-4">
          No Internet
        </span>
        <br /> <span className="mb-7">No Internet</span> <br />
        <span className="mt-4">Try</span> : <br />
        <ul className="ml-4 ">
          <li>Checking the network cables, modem and</li>
          <li>router Reconnecting to Wi-Fi</li>
        </ul>
        <span className="text-base text-gray-400 mt-3">
          DNS_PROBE_FINISHED_NO_INTERNET
        </span>
      </div>
    </div>
  );
};

export default IsOnline;
