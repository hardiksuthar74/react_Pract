import LogOutButton from "../LogOutButton";
import TopBar from "../TopBar";

const HomeTopbar = () => {
  return (
    <TopBar>
      <div className="text-sm">V: 1.0.7</div>
      <div>Home</div>
      <LogOutButton />
    </TopBar>
  );
};

export default HomeTopbar;
