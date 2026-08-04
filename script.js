const noButton = document.getElementById("noButton");

const phrases = [
    "💔 Ты мне не интересен",
    "😝 Не получится",
    "🙃 Мимо",
    "😏 Хорошая попытка",
    "😂 Хаха",
    "🤨 Серьезно?",
    "🥺 Может не надо?",
    "🏃 Попробуй поймай",
    "😎 Даже не думай",
    "👀 Я слежу за тобой"
];

let tries = 0;

function moveButton() {

    tries++;

    if (tries === 5)
        alert("😅 Уже 5 попыток...");

    if (tries === 10)
        alert("😂 Ты очень настойчивая.");

    if (tries === 20)
        alert("🏆 Достижение получено!");

    noButton.textContent =
        phrases[Math.floor(Math.random() * phrases.length)];

    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    noButton.style.transform =
        `rotate(${Math.random() * 20 - 10}deg)`;
}

noButton.addEventListener("mouseover", moveButton);