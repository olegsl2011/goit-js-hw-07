function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const controls = document.querySelector("#controls");
    const boxes = document.querySelector("#boxes");
    const input = controls.querySelector("input");

    const DEFAULT_BOX_SIZE = 30;
    const STEP = 10;

    const createBoxes = (amount) => {
        const boxesMarkup = Array.from({ length: amount }, (_, i) => {
            const size = DEFAULT_BOX_SIZE + i * STEP + "px";
            return `<div style="background: ${getRandomHexColor()};width: ${size};height: ${size};"></div>`;
        }).join("");
        boxes.innerHTML = boxesMarkup;
        input.value = 0;
    };

    const destroyBoxes = () => {
        boxes.innerHTML = "";
    };

    controls.addEventListener("click", (e) => {
        if (e.target.hasAttribute("data-create")) {
            const amount = Number(input.value);

            if (amount > 0 && amount <= 100) {
                createBoxes(amount);
            } else {
                alert("Amount should be in range 0 - 100");
            }
        }

        if (e.target.hasAttribute("data-destroy")) {
            destroyBoxes();
        }
    });
});
