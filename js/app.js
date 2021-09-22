var calculatorButton = document.querySelectorAll(".calculator_button");
var inpuut = document.querySelector("input");
var root = document.querySelector(".root");
// var rootText = root.innerText
// console.log(rootText);
for (items of calculatorButton) {
	items.addEventListener("click", (e) => {
		text = e.target.innerText;

		if (text === "OFF") {
			// inpuut.value = text
			inpuut.classList.add("off");
			e.target.innerText = "ON";
			e.target.style.backgroundColor = "green";
		} else if (text === "ON") {
			inpuut.value = "";
			inpuut.classList.remove("off");
			e.target.style.backgroundColor = "red";
			e.target.innerText = "OFF";
		} else if (text === "C") {
			inpuut.value = "";
		} else if (text === "=") {
			text = eval(inpuut.value);
			inpuut.value = text;
		} else if (text === "x^2") {
			text = eval(inpuut.value * inpuut.value);
			inpuut.value = text;
		} else if (text === "Root") {
			text = eval(Math.sqrt(inpuut.value));
			inpuut.value = text;
		} else {
			inpuut.value += text;
		}
	});
}
for (items of calculatorButton) {
	window.addEventListener("keypress", (e) => {
        
    });
}
