"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-2 p-4">
      <div className="capitalize text-red-500">hello world: </div>
      <Button onClick={() => console.log("println!")}>click me</Button>
    </div>
  );
}
