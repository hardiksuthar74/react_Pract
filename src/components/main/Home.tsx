import LogOutButton from "../LogOutButton";

const Home = () => {
  return (
    <>
      <div className="h-16 bg-[#234292] text-white flex justify-between items-center text-2xl px-4">
        <div className="text-sm">V: 1.0.7</div>
        <div>Home</div>
        <LogOutButton />
      </div>
    </>
  );
};

export default Home;
