import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "一覧ページ",
};

const memos = [
	{ id: 1, name: "チェオン" },
	{ id: 2, name: "サクラ" },
	{ id: 3, name: "ユンジン" },
	{ id: 4, name: "カズハ" },
	{ id: 5, name: "ウンチェ" },
];

export default function MemoList() {
	return (
		<main>
			<h1>グループ名：ルセラフィム</h1>
			<h2>↓メンバー↓</h2>
			<ul>
				{memos.map((memo) => (
					<li key={memo.id}>
						<Link href={`/memos/${memo.id}`}>{memo.name}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
