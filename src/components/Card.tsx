import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#fbfbfb] rounded-3xl m-4 shadow-lg p-4">{children}</div>
  );
};

export default Card;
