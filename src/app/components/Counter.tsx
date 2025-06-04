"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>カウント：{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}
