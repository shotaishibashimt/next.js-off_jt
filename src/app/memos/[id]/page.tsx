import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "詳細ページ",
};

type Item = {
	name: string;
	description: string;
};

async function getItemDetails(id: string) {
	const items: Record<string, Item> = {
		"1": {
			name: "チェオン",
			description: "リーダー、24歳、メインボーカル",
		},
		"2": {
			name: "サクラ",
			description: "最年長、26歳、ラップ",
		},
		"3": {
			name: "ユンジン",
			description: "アメリカ生まれ、23歳、メインボーカル",
		},
		"4": {
			name: "カズハ",
			description: "日本生まれ、21歳、メインダンサー兼ラップ",
		},
		"5": {
			name: "ウンチェウンチェ",
			description: "最年少、18歳、メインダンサー兼ラップ",
		},
	};
	return items[id] || null;
}

export default async function ItemDetailPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const item = await getItemDetails(id);

	if (!item) {
		return <div>アイテムが見つかりません。</div>;
	}

	return (
		<div>
			<h1>{item.name}</h1>
			<p>{item.description}</p>
			<Link href="/memos">一覧へ戻る</Link>
		</div>
	);
}
