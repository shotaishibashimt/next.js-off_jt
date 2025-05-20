import type { Metadata } from "next";
import Link from "next/link";

export default function TopPage() {
	return (
		<main>
			<h1>ようこそ</h1>
			<Link href="/memos">一覧ページへ</Link>
		</main>
	);
}
