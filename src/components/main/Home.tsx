import UserInfo from "./UserInfo";
import HomeTopbar from "./HomeTopbar";
import HomeSchedules from "./HomeSchedules";
import WholeScreen from "../WholeScreen";

const Home = () => {
  return (
    <div className="bg-[#e0e0e0] h-full overflow-y-scroll">
      <HomeTopbar />
      <WholeScreen>
        <UserInfo />
        <HomeSchedules />
        {/* <AllTask /> */}
      </WholeScreen>
    </div>
  );
};

export default Home;
