const input = document.getElementById("nameInput");
const submit = document.getElementById("submit");
const output = document.getElementById("nameOutput");

submit.addEventListener("click", () => {
	const value = input.value.trim();
	if (value === "") {
		output.innerText = "名前を入力してください";
	} else {
		output.innerText = `こんにちは、${value}さん！`;
	}
});
