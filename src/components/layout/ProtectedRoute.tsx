import { useLogin } from "@/hooks/isLogin";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useLogin();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  if (isLogin) return <div>{children}</div>;
};

export default ProtectedRoute;
