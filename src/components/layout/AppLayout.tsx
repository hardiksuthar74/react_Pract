import { Outlet } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";

const AppLayout = () => {
  return (
    <div className="w-[500px] bg-slate-50 mx-auto h-screen flex flex-col justify-between overflow-hidden">
      <Outlet />

      <BottomNavBar />
    </div>
  );
};

export default AppLayout;
