import { Button } from "../ui/button";
import { Input } from "../ui/input";
import MitraLogo from "../../assets/logo/ciplaMitraLogo.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <main className="flex flex-col justify-center items-center max-w-[600px] m-auto h-screen">
      {/* <MitraLogo /> */}
      <div className="w-[200px]">
        <img src={MitraLogo} className="w-full" />
      </div>
      <Input placeholder="User Name" className="m-2" />
      <Input placeholder="Password" className="m-2" />
      <Link to="/login" className="m-2 items-end text-left">
        Forget Password?
      </Link>
      <Button className="bg-[#ffd439] text-xl pt-2 px-6 hover:bg-[#ffd53f] hover:text-white transition-all">
        Login
      </Button>
    </main>
  );
};

export default LoginForm;
