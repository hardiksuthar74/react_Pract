import Card from "../Card";
import LogOutButton from "../LogOutButton";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import ProfilePic from "../../assets/profile.jpg";
import { useLogin } from "@/hooks/isLogin";
import { Link } from "react-router-dom";
import Schedules from "./Schedules";
import useTimer from "@/hooks/useTimer";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Home = () => {
  const { isPunchIn, punchInUser, punchOutUser, punchInTime } = useLogin();
  const { elapsedTime } = useTimer(punchInTime);

  const date = new Date(punchInTime);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const timeIn24HourFormat = `${hours}:${minutes}`;

  const todaysDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

  const punchInUserHandler = () => {
    punchInUser();
    cookies.set("isPunchIn", true);
    cookies.set("punchInTime", new Date().getTime());
  };

  return (
    <div className="bg-[#e0e0e0] h-full overflow-y-scroll">
      <div className="h-16 bg-[#234292] text-white flex justify-between items-center text-2xl px-4 w-[500px] absolute z-50">
        <div className="text-sm">V: 1.0.7</div>
        <div>Home</div>
        <LogOutButton />
      </div>

      <div className="flex-1 mt-[100px]">
        {/* <UserInfo/> */}
        {/* <AllSchedules/> */}
        {/* <AllTask /> */}
        <Card>
          <div className="flex justify-between text-xl">
            <div className="flex flex-col gap-1">
              <p>Hello,</p>
              <p className="font-bold">Test Mitra</p>

              {!isPunchIn && (
                <p className="text-[#3535ff]">You are punched out!</p>
              )}
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
                      onClick={punchOutUser}
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

        <Card>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Schedule</p>
            <Link to={"/home/schedule"}>All</Link>
          </div>

          <div className="mt-2">
            <input
              defaultValue={todaysDate}
              min={todaysDate}
              type="date"
              className="bg-[#f8a22b] w-30 h-10 p-2 rounded-lg text-sm"
            />
          </div>

          <div className="mt-6">
            <Schedules />
            <Schedules />
            {/* <Schedules /> */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
