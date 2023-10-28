import { Link } from "react-router-dom";
import Card from "../Card";
import Schedules from "./Schedules";

const HomeSchedules = () => {
  const todaysDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
  return (
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
        <Schedules id={1} />
        <Schedules id={2} />
        {/* <Schedules /> */}
      </div>
    </Card>
  );
};

export default HomeSchedules;
