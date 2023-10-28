import React from "react";

const WholeScreen = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1 mt-[100px]">{children}</div>;
};

export default WholeScreen;
