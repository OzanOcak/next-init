import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  console.log("home");

  return (
    <div className="flex gap-2 p-4">
      <ModeToggle />
    </div>
  );
}
