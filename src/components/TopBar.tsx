import React from "react";

const TopBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-16 bg-[#234292] text-white flex justify-between items-center text-2xl px-4 w-[500px] absolute z-50">
      {children}
    </div>
  );
};

export default TopBar;
