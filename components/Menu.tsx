import { useRouter } from "next/navigation";
import React from "react";

export default function Menu() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 grow">
      <div
        onClick={() => router.replace("/")}
        className="rounded-[7px] p-2 hover:bg-neutral-700 transition duration-500 hover:cursor-pointer"
      >
        Dashboard
      </div>
      <div
        onClick={() => router.replace("/task-list")}
        className="rounded-[7px] p-2 hover:bg-neutral-700 transition duration-500 hover:cursor-pointer "
      >
        Task List
      </div>
      <div
        onClick={() => router.replace("/spending-list")}
        className="rounded-[7px] p-2 hover:bg-neutral-700 transition duration-500 hover:cursor-pointer"
      >
        Spending List
      </div>
    </div>
  );
}
