import Card from "../Card";
import LogOutButton from "../LogOutButton";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import ProfilePic from "../../assets/profile.jpg";
import { useLogin } from "@/hooks/isLogin";
import { Link } from "react-router-dom";
import Schedules from "./Schedules";

const Home = () => {
  const { isPunchIn, punchInUser, punchOutUser } = useLogin();

  const todaysDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

  return (
    <div className="bg-[#fff] h-full overflow-y-scroll">
      <div className="h-16 bg-[#234292] text-white flex justify-between items-center text-2xl px-4 w-[500px] absolute z-10">
        <div className="text-sm">V: 1.0.7</div>
        <div>Home</div>
        <LogOutButton />
      </div>

      <div className="flex-1 mt-[100px]">
        <Card>
          {/* <UserInfo/> */}
          <div className="flex justify-between text-xl">
            <div className="flex flex-col gap-1">
              <p>Hello,</p>
              <p className="font-bold">Test Mitra</p>

              <p className="text-[#3535ff]">You are punched out!</p>
              <div className="mt-8 mb-2">
                {!isPunchIn ? (
                  <Button
                    variant={"primary"}
                    className="shadow-xl rounded-3xl"
                    onClick={punchInUser}
                  >
                    Punch In
                  </Button>
                ) : (
                  <Button
                    variant={"primary"}
                    className="shadow-xl rounded-3xl"
                    onClick={punchOutUser}
                  >
                    Punch Out
                  </Button>
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
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
