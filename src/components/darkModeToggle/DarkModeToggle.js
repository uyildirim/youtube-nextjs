import React from "react";

export default function DarkModeToggle() {
    return (
    <div className="cont w-[42px] h-[24px] border-[1.5px] relative rounded-3xl flex items-center p-0.5 border-green-900">
      <div className="icon text-xs">🌙</div>
      <div className="icon text-xs">🔆</div>
      <div className="ball w-[15px] h-[15px] bg-green-950 rounded-3xl absolute "></div>
    </div>
  );
}
