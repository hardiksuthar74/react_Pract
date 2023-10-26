import { useState, useEffect } from "react";
import { useLogin } from "./isLogin";

function useTimer(startTime: number) {
  const [elapsedTime, setElapsedTime] = useState<string>();

  const { isPunchIn } = useLogin();

  useEffect(() => {
    if (isPunchIn) {
      const time = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const hours = Math.floor(elapsedTime / 1000 / 60 / 60);
        const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
        const seconds = Math.floor(elapsedTime / 1000) % 60;

        setElapsedTime(`${hours} h ${minutes} m ${seconds} s`);
      }, 1000);

      return () => {
        clearInterval(time);
      };
    } else {
      setElapsedTime(`0 h 0 m 0 s`);
    }
  }, [isPunchIn, startTime]);

  return {
    elapsedTime,
  };
}

export default useTimer;
