import { cn } from "@/lib/utils";
import { BookMarked, Home, User2, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNavBar = () => {
  const [activeEl, setActiveEl] = useState("home");

  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    setActiveEl(pathname);
  }, [pathname]);

  return (
    <>
      <div className="bg-[#234292] h-16 border-none rounded-none text-[#a37c53] flex justify-around items-center gap-8">
        <Link to={"home"}>
          <div
            className={cn(
              "flex flex-col justify-center items-center",
              `${activeEl == "/home" ? "text-[#f8a22b]" : ""}`
            )}
          >
            <Home />
            <p>Home</p>
          </div>
        </Link>

        <Link to={"you"}>
          <div
            className={cn(
              "flex flex-col justify-center items-center",
              `${activeEl == "/you" ? "text-[#f8a22b]" : ""}`
            )}
          >
            <User2 />
            <p>You</p>
          </div>
        </Link>

        <Link to={"patient_list"}>
          <div
            className={cn(
              "flex flex-col justify-center items-center",
              `${activeEl == "/patient_list" ? "text-[#f8a22b]" : ""}`
            )}
          >
            <Users />
            <p>Patient List</p>
          </div>
        </Link>

        <Link to={"education"}>
          <div
            className={cn(
              "flex flex-col justify-center items-center",
              `${activeEl == "/education" ? "text-[#f8a22b]" : ""}`
            )}
          >
            <BookMarked />
            <p>Education</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BottomNavBar;
