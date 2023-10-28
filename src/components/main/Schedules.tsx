import { Badge } from "../ui/badge";
import ProfilePic from "../../assets/profile.jpg";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useSchedule } from "@/hooks/useSchedules";
import { useLogin } from "@/hooks/isLogin";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";

interface SchedulesProps {
  id: string | number;
}

const Schedules = ({ id }: SchedulesProps) => {
  const { isPunchIn } = useLogin();
  const { toast } = useToast();
  const { anyOpdStarted, endOpd, scheduleId, startOpd } = useSchedule();

  const navigate = useNavigate();

  const startOpdHandler = () => {
    try {
      if (!isPunchIn) {
        return toast({
          title: "Please Punch In!",
          variant: "destructive",
          duration: 1000,
        });
      }

      if (anyOpdStarted) {
        return toast({
          title: "Please Complete Ongoing Opd!",
          variant: "destructive",
          duration: 1000,
        });
      }

      startOpd(id);
    } catch (error) {
      console.log(error);
    }
  };

  const endOpdHandler = () => {
    try {
      if (!isPunchIn) {
        return toast({
          title: "Please Punch In!",
          variant: "destructive",
          duration: 1000,
        });
      }

      if (scheduleId !== id) {
        return toast({
          title: "Please Start This Opd",
          variant: "destructive",
          duration: 1000,
        });
      }
      endOpd();
    } catch (error) {
      console.log(error);
    }
  };

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
            {scheduleId !== id ? (
              <Button
                variant={"primary"}
                onClick={startOpdHandler}
                className="rounded-3xl"
              >
                Start Opd
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/home/camp")}
                variant={"primary"}
                className="rounded-3xl bg-green-500 hover:bg-green-500/50"
              >
                Opd Started
              </Button>
            )}
            <Button
              variant={"outline"}
              onClick={endOpdHandler}
              className="rounded-3xl"
            >
              End Opd
            </Button>
          </div>
        </div>
      </div>

      <div className="m-2">
        <Badge variant={"outline"} className="bg-yellow-300">
          Scheduled
        </Badge>
      </div>
    </div>
  );
};

export default Schedules;
