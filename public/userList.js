document.addEventListener("DOMContentLoaded", () => {
	const userList = document.getElementById("userList");
	const status = document.getElementById("status");

	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => {
			if (!res.ok) {
				throw new Error("HTTPエラー");
			}
			return res.json();
		})
		.then((users) => {
			for (const user of users) {
				const li = document.createElement("li");
				li.textContent = user.name;
				userList.appendChild(li);
			}
		})
		.catch((err) => {
			status.textContent = "";
			error.innerText = "データの取得に失敗しました";
			console.error("通信エラー：", err);
		});
	status.textContent = "";
});
