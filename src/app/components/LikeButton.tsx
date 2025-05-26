"use client";

import { useState } from "react";

export function LikeButton() {
	const [count, setCount] = useState(0);

	return (
		<button type="button" onClick={() => setCount(count + 1)}>
			👍{count}
		</button>
	);
}
