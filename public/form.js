const form = document.getElementById("userForm");
form.addEventListener("submit", (e) => {
	e.preventDefault(); //ページリロードを防ぐ
	//全IDを定義
	const name = document.getElementById("name");
	const age = document.getElementById("age");
	const occupation = document.getElementById("occupation");
	const bio = document.getElementById("bio");
	//名前のバリデーション
	if (name.value === "") {
		document.getElementById("nameError").style.display = "block";
	} else {
		document.getElementById("nameError").style.display = "none";
	}
	//年齢のバリデーション
	if (age.value < 18) {
		document.getElementById("ageError").style.display = "block";
	} else {
		document.getElementById("ageError").style.display = "none";
	}
	//職業のバリデーション
	if (occupation.value === "") {
		document.getElementById("jobError").style.display = "block";
	} else {
		document.getElementById("jobError").style.display = "none";
	}
	const formData = {
		name: name.value,
		age: age.value,
		occupation: occupation.value,
		bio: bio.value || null,
	};
	//json形式でコンソールに出力
	console.log(JSON.stringify(formData, null, 2));
});
