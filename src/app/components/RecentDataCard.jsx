import React from "react";

export default function RecentDataCard({ name, value, type }) {
  return (
    <div className="bg-white border border-gray-100 text-left h-28 w-1/6 py-8 px-4 shadow-sm shadow-gray-200 mx-2.5 my-4 rounded-md">
      <div className="text-xl">{type == "price" ? "$"+(value).toLocaleString('en-US') : value}</div>
      <div className="text-[#FF9926] text-[16px] font-bold">{name}</div>
    </div>
  );
}
