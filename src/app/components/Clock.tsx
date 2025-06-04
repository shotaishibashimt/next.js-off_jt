"use client";
import { useEffect, useState } from "react";

const Clock = () => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const Timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(Timer);
  }, []);
  return <div>{now.toLocaleTimeString()}</div>;
};

export default Clock;
