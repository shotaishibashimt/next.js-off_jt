import type { Metadata } from "next";
import Clock from "./components/Clock";
import Counter from "./components/Counter";

export const metadata: Metadata = {
  title: "カウントアプリと時刻表示",
};

export default function CountPage() {
  return (
    <main>
      <Counter />
      <Clock />
    </main>
  );
}
