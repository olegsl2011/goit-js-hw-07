function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const refs = {
        changeColorButton: document.querySelector(".change-color"),
        color: document.querySelector(".color"),
    };

    refs.changeColorButton.addEventListener("click", () => {
        const bgColor = getRandomHexColor();
        document.body.style.backgroundColor = bgColor;
        refs.color.textContent = bgColor;
    });
});
