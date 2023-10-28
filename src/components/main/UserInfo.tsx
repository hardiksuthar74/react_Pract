import { useLogin } from "@/hooks/isLogin";
import Card from "../Card";
import useTimer from "@/hooks/useTimer";
import Cookies from "universal-cookie";

import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import ProfilePic from "../../assets/profile.jpg";
import { useSchedule } from "@/hooks/useSchedules";
import { useToast } from "../ui/use-toast";

const cookies = new Cookies();

const UserInfo = () => {
  const { isPunchIn, punchInUser, punchOutUser, punchInTime } = useLogin();
  const { anyOpdStarted } = useSchedule();
  const { toast } = useToast();

  const { elapsedTime } = useTimer(punchInTime);

  const date = new Date(punchInTime);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const timeIn24HourFormat = `${hours}:${minutes}`;

  const punchInUserHandler = () => {
    punchInUser();
    cookies.set("isPunchIn", true);
    cookies.set("punchInTime", new Date().getTime());
  };

  const punchOutUserHandler = () => {
    if (anyOpdStarted) {
      return toast({
        title: "Please End Ongoing Opd!",
        variant: "destructive",
      });
    }
    punchOutUser();
    cookies.set("isPunchIn", false);
    // cookies.set("punchInTime", new Date().getTime());
  };
  return (
    <Card>
      <div className="flex justify-between text-xl">
        <div className="flex flex-col gap-1">
          <p>Hello,</p>
          <p className="font-bold">Test Mitra</p>

          {!isPunchIn && <p className="text-[#3535ff]">You are punched out!</p>}
          <div className="mt-8 mb-2">
            {!isPunchIn ? (
              <Button
                variant={"primary"}
                className="shadow-xl rounded-3xl"
                onClick={punchInUserHandler}
              >
                Punch In
              </Button>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <div className="bg-[#f8a22b] p-2 rounded-xl z-20 text-sm">
                  Total Duration <br />
                  {elapsedTime}
                </div>
                <div className="border-black border-2 p-1 ml-[-26px] z-[1] pl-6 rounded-xl text-sm">
                  <span className="text-sm">In Time</span>
                  <br />
                  {timeIn24HourFormat}
                </div>
                <Button
                  variant={"destructive"}
                  className="shadow-xl rounded-3xl"
                  onClick={punchOutUserHandler}
                >
                  Punch Out
                </Button>
              </div>
            )}
          </div>
        </div>
        <div>
          <Avatar className="w-[80px] h-auto">
            <AvatarImage src={ProfilePic} />
          </Avatar>
        </div>
      </div>
    </Card>
  );
};

export default UserInfo;
