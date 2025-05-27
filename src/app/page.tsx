import type { Metadata } from "next";
import Link from "next/link";
import { LikeButton } from "./components/LikeButton";

export const metadata: Metadata = {
  title: "トップページ",
};

export default function TopPage() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="flex flex-col">
      <h1>こんにちは！</h1>
      <p>今日は{today}です。</p>
      <LikeButton />
      <Link href="/memos">一覧ページへ</Link>
    </div>
  );
}
