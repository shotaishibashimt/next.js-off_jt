"use client";

import Link from "next/link";
import useSWR from "swr";

type Memo = {
  title: string;
  id: number;
};

export default function MemosPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/memos", fetcher);
  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラーが発生しました</p>;
  return (
    <main>
      <p>これはメモ一覧ページです</p>
      <ul>
        {data.map((memo: Memo) => (
          <li key={memo.id}>{memo.title}</li>
        ))}
      </ul>
      <Link
        href="/memos/new"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        メモ登録画面へ
      </Link>
    </main>
  );
}
