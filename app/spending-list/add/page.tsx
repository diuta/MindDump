"use client";

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
import { useState } from "react";

export default function AddSpending() {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const formatCurrency = (value: string) => {
    if (!value) return "";
    return Number(value).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen min-w-fit p-10 bg-stone-50"
      id="pagewrapper"
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Add Spending</CardTitle>
          <CardDescription>add spending details dawg i dare ya</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label>How much did you waste this time?</Label>
            <Input
              placeholder="ex. spending 200k for a date with a girl who doesn't even like you lol"
              inputMode="numeric"
              required
              value={formatCurrency(amount)}
              onChange={(e) => {
                const numbersOnly = e.target.value.replace(/[^0-9]/g, "");
                setAmount(numbersOnly);
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="grid gap-2">
              <Label>When did you spent it?</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label>Category</Label>
              <div>
                <Select required onValueChange={(value) => setCategory(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Food">Food</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="Transport">Transport</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
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
              onChange={(e) => {
                setDescription(e.target.value);
              }}
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
