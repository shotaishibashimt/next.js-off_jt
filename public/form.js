document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("userForm");

	form.addEventListener("submit", (e) => {
		e.preventDefault(); // ページのリロード防止
		try {
			const results = [
				{
					id: "name",
					isValid: true,
					message: "名前を入力してください。",
				},
				{
					id: "age",
					isValid: true,
					message: "18歳以上の年齢を入力してください。",
				},
			];

			for (const result of results) {
				const element = document.getElementById(result.id);
				const value = element.value;
				if (result.id === "age") {
					result.isValid =
						!Number.isNaN(value) && Number.parseInt(value, 10) >= 18;
				} else {
					result.isValid = value.trim() !== "";
				}
			}

			const allValid = results.every((result) => result.isValid);
			if (!allValid) {
				const errorMessage = results
					.filter((result) => !result.isValid)
					.map((result) => `${result.id}: ${result.message}`)
					.join("\n");
				throw new Error(errorMessage);
			}

			const data = {
				username: document.getElementById("name").value,
				age: document.getElementById("age").value,
				occupation: document.getElementById("occupation").value,
				bio: document.getElementById("bio").value,
			};
			console.log("ユーザー入力データ:", JSON.stringify(data, null, 2));
		} catch (error) {
			// エラーメッセージの表示
			const errorMessages = error.message.split("\n");
			for (const msg of errorMessages) {
				const [id, message] = msg.split(": ");
				const errorElement = document.getElementById(`${id}Error`);
				if (errorElement) {
					errorElement.textContent = message;
					errorElement.style.display = "block";
				}
			}
		}
	});
	// 各入力フィールドの変更時にエラーメッセージを非表示にする
	const inputs = document.querySelectorAll("#userForm input");
	for (const input of inputs) {
		input.addEventListener("input", () => {
			const errorElement = document.getElementById(`${input.id}Error`);
			if (errorElement) {
				errorElement.style.display = "none";
			}
		});
	}
});
