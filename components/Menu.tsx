import React from "react";

export default function Menu() {
  return (
    <div className="flex flex-col gap-4 grow">
      <div className="rounded-[7px] p-2 hover:bg-neutral-700 transition duration-500 hover:cursor-pointer">
        Home
      </div>
      <div className="rounded-[7px] p-2 hover:bg-neutral-700 transition duration-500 hover:cursor-pointer">
        Settings
      </div>
    </div>
  );
}
