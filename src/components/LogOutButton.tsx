import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useLogin } from "@/hooks/isLogin";

import Cookies from "universal-cookie";
import { useToast } from "./ui/use-toast";

const cookies = new Cookies();

const LogOutButton = () => {
  const { toast } = useToast();
  const { logOutUser, isPunchIn } = useLogin();

  const logoutUserHandler = () => {
    if (!isPunchIn) {
      cookies.remove("isLogin");
      logOutUser();
    } else {
      toast({
        title: "Please Punch Out",
      });
    }
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
