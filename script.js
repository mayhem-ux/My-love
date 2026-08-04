const noButton = document.getElementById("noButton");
let tries = 0;
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

let firstMove = false;

function moveButton(){

    const width = noButton.offsetWidth;
    const height = noButton.offsetHeight;

    const x = Math.random() * (window.innerWidth - width - 20);

    const y = Math.random() * (window.innerHeight - height - 20);

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
noButton.textContent =
    phrases[Math.floor(Math.random() * phrases.length)];
}

noButton.addEventListener("mouseenter",()=>{

    if(!firstMove){

        noButton.style.position="fixed";

        firstMove=true;
    }

    moveButton();
tries++;

if(tries === 5){

    alert("😅 Уже 5 попыток... Может нажмешь на зеленую?");

}

if(tries === 10){

    alert("😂 Ты очень настойчивая.");

}

if(tries === 20){

    alert("🏆 Поздравляю! Ты открыла достижение: 'Охотник за красными кнопками'");

}
});