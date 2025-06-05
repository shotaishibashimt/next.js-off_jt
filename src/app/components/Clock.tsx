"use client";
import { useEffect, useState } from "react";

const Clock = () => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return <div>{now.toLocaleTimeString()}</div>;
};

export default Clock;
