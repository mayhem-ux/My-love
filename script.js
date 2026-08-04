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
let detached = false;

function moveButton(){

    tries++;

    if(tries===5)
        alert("😅 Уже 5 попыток...");

    if(tries===10)
        alert("😂 Ты очень настойчивая.");

    if(tries===20)
        alert("🏆 Достижение разблокировано!");

    noButton.textContent =
        phrases[Math.floor(Math.random()*phrases.length)];

    if(!detached){

        const rect = noButton.getBoundingClientRect();

        noButton.style.position="fixed";
        noButton.style.left=rect.left+"px";
        noButton.style.top=rect.top+"px";

        detached=true;
    }

    const safeTop = 260;
    const safeBottom = window.innerHeight-80;

    const x = Math.random()*(window.innerWidth-noButton.offsetWidth-20);

    const y = safeTop + Math.random()*(safeBottom-safeTop);

    noButton.style.left=x+"px";
    noButton.style.top=y+"px";

    noButton.style.transform=`rotate(${Math.random()*16-8}deg)`;
}

noButton.addEventListener("mouseenter",moveButton);
noButton.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    moveButton();
});