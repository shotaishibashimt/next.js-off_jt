const form = document.getElementById("userForm");
form.addEventListener("submit", (e) => {
	e.preventDefault(); //ページリロードを防ぐ
	//全IDを定義
	const name = document.getElementById("name");
	const age = document.getElementById("age");
	const occupation = document.getElementById("occupation");
	const bio = document.getElementById("bio");
	//エラーフラグ
	let hasError = false;
	try {
		//名前のバリデーション
		if (name.value === "") {
			document.getElementById("nameError").style.display = "block";
			hasError = true;
		} else {
			document.getElementById("nameError").style.display = "none";
		}
		//年齢のバリデーション
		if (age.value === "") {
			document.getElementById("ageError").style.display = "none";
			hasError = true;
		} else if (age.value < 18) {
			document.getElementById("ageError").style.display = "block";
			hasError = true;
		} else {
			document.getElementById("ageError").style.display = "none";
		}
		//エラーがあれば表示
		if (hasError) {
			return;
		}
		const formData = {
			name: name.value,
			age: age.value,
			occupation: occupation.value,
			bio: bio.value || null,
		};
		//json形式でコンソールに出力
		console.log(JSON.stringify(formData, null, 2));
	} catch (error) {
		//エラーが発生した場合の処理
		console.error("エラーが発生しました");
		alert(エラーが発生しました);
	}
});
