import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const You = () => {
  return (
    <>
      <div className="h-16 bg-[#234292] text-white flex justify-between items-center text-2xl px-4">
        <div>{""}</div>
        <div>You</div>
        <Button variant={"ghost"} size={"icon"}>
          <UserPlus />
        </Button>
      </div>
    </>
  );
};

export default You;
