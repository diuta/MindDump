"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TaskList() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 min-h-screen min-w-fit p-10 bg-stone-50" id="pagewrapper">
      <div className="flex justify-center text-center text-3xl font-bold">
        Task Lists
      </div>

      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => router.replace("/task-list/add")}
          className="bg-neutral-700 text-white font-bold hover:cursor-pointer"
        >
          Add Task
        </Button>
      </div>
    </div>
  );
}
