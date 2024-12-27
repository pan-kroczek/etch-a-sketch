const container = document.querySelector("#container");
let side = 16;
let area = side * side;
let percent = 100 / side;

for (i = 0; i < area; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.flexBasis = `${percent}%`;
    container.appendChild(square);
}