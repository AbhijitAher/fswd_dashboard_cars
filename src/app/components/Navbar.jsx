import React from "react";

export default function Navbar() {
  return (
    <div className="text-red-300 bg-slate-900 h-10 justify-between flex px-4">
      <div className="flex">
        <div className="p-2">Logo</div>
        <div className="p-2">Admin Console</div>
        <div className="p-2">Admin View</div>
      </div>
      <div className="flex">
        <div className="p-2">Support Icon</div>
        <div className="p-2">Support</div>
        <div className="p-2">Profile Pic</div>
        <div className="p-2">Jane</div>
      </div>
    </div>
  );
}
