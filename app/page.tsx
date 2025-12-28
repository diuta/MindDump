import { TaskCard } from "@/components/TaskCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-10 space-y-4 bg-stone-50">
      <h1 className="text-2xl font-bold mb-6">My Tasks</h1>

      <TaskCard
        id="task-1"
        title="Review Shadcn Documentation"
        status="in-progress"
        priority="high"
        date="Today"
      />

      <TaskCard
        id="task-2"
        title="Update Global CSS Variables"
        status="todo"
        priority="medium"
        date="Tomorrow"
      />
    </div>
  );
}
