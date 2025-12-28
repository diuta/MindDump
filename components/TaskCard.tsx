import { MoreHorizontal, Calendar, Flag } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TaskProps {
  title: string;
  id: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  date: string;
}

export function TaskCard({ title, id, status, priority, date }: TaskProps) {
  return (
    <Card className="w-full max-w-md hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-3">
          <Checkbox id={id} />
          <div className="space-y-1">
            <CardTitle className="text-base font-medium leading-none">
              <label
                htmlFor={id}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                {title}
              </label>
            </CardTitle>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="-mr-2 h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit Task</DropdownMenuItem>
            <DropdownMenuItem>Assign User</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
          </div>
          <div className="flex items-center">
            <Flag
              className={`mr-1 h-3 w-3 ${
                priority === "high"
                  ? "text-red-500"
                  : priority === "medium"
                  ? "text-yellow-500"
                  : "text-blue-500"
              }`}
            />
            <span className="capitalize">{priority}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge
          variant={status === "done" ? "secondary" : "default"}
          className="capitalize"
        >
          {status.replace("-", " ")}
        </Badge>
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardFooter>
    </Card>
  );
}
