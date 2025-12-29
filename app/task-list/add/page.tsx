import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AddTask() {
  return (
    <div
      className="flex justify-center items-center min-h-screen min-w-fit p-10 bg-stone-50"
      id="pagewrapper"
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Add Task</CardTitle>
          <CardDescription>add task details dawg i dare ya</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label>Task Name</Label>
            <Input
              placeholder="ex. chat that one girl that's waaay out of your league"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="grid gap-2">
              <Label>Target Date</Label>
              <Input type="date" />
            </div>
            <div className="grid gap-2">
              <Label>Priority</Label>
              <div>
                <Select required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea
              placeholder="add your description here"
              className="resize-none h-20"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
