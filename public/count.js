const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

/*初期値の設定*/
let count = 0;

/*クリックイベントの設定*/
increase.addEventListener("click", () => {
	count++;
	counter.textContent = count;
});

decrease.addEventListener("click", () => {
	count--;
	counter.textContent = count;
});
