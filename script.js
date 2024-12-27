const container = document.querySelector("#container");
const input = document.querySelector("#canvasArea");
const create = document.querySelector("#create");

function createGrid(size = 16) {
    let area = size * size;
    let percent = 100 / size;

    for (i = 0; i < area; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${percent}%`;
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            square.style.opacity += 1;
        });
    };
};

create.addEventListener("click", () => {
    location.reload();
    createGrid(input.value);
});

createGrid();