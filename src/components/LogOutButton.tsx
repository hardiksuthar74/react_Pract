import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useLogin } from "@/hooks/isLogin";

const LogOutButton = () => {
  const { logOutUser } = useLogin();

  const logoutUserHandler = () => {
    logOutUser();
  };

  return (
    <>
      <Button onClick={logoutUserHandler} variant={"ghost"} size={"icon"}>
        <LogOut />
      </Button>
    </>
  );
};

export default LogOutButton;
