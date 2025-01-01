const container = document.querySelector("#container");
const input = document.querySelector("#canvasArea");
const create = document.querySelector("#create");
const reset = document.querySelector("#reset");

function createGrid(size = 16) {
    let area = size * size;
    let percent = 100 / size;

    for (i = 0; i < area; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${percent}%`;
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            opacity = square.style.opacity;
            square.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.2;
        });
    };
};

function removeChildren() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
}

createGrid();

create.addEventListener("click", () => {
    removeChildren();
    createGrid(input.value);
});

reset.addEventListener("click", () => {
    input.value = 16;
    removeChildren();
    createGrid();
})