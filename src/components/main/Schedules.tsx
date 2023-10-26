import { Badge } from "../ui/badge";
import ProfilePic from "../../assets/profile.jpg";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Schedules = () => {
  return (
    <div className="border-2 border-[#234292] rounded-sm flex justify-between p-2 m-2 mb-6">
      <div className="flex justify-center gap-2 mb-4">
        <div className="p-2">
          <Avatar className="w-[60px] h-auto">
            <AvatarImage src={ProfilePic} />
          </Avatar>
        </div>

        <div className="flex flex-col gap-3">
          <p>Test Doctor</p>
          <p>6:00 pm to 9:00 pm</p>
          <div className="flex gap-2">
            <Button variant={"primary"} className="rounded-3xl">
              Start Opd
            </Button>
            <Button variant={"outline"} className="rounded-3xl">
              End Opd
            </Button>
          </div>
        </div>
      </div>

      <div className="m-2">
        <Badge variant={"destructive"}>Completed</Badge>
      </div>
    </div>
  );
};

export default Schedules;
