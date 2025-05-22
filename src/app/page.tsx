import { LikeButton } from "./components/LikeButton";

export default function Page() {
	const today = new Date().toLocaleDateString();

	return (
		<div>
			<h1>こんにちは！</h1>
			<p>今日は{today}です。</p>
			<LikeButton />
		</div>
	);
}
