import React from "react";

export default function RecentDataCard({ name, value }) {
  return (
    <div className="h-28 align-left text-left w-1/6 p-8 shadow shadow-gray-400 mx-2.5 my-4 rounded-md">
      <div className="text-xl">{value}</div>
      <div className="text-[#FF9926] text-[16px] font-bold">{name}</div>
    </div>
  );
}
