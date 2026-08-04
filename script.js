const noButton = document.getElementById("noButton");

const phrases = [

"💔 Ты мне не интересен",

"😝 Не получится",

"😂 Хорошая попытка",

"🙃 Мимо",

"🏃 Попробуй поймай",

"😎 Даже не думай",

"🥺 Может не надо?",

"👀 Я слежу за тобой"

];

let tries = 0;

let activated = false;

function moveButton(){

    tries++;

    if(tries==5)
        alert("😅 Уже 5 попыток...");

    if(tries==10)
        alert("😂 Ты очень настойчивая.");

    if(tries==20)
        alert("🏆 Достижение получено!");

    noButton.textContent=phrases[Math.floor(Math.random()*phrases.length)];

    if(!activated){

        const rect=noButton.getBoundingClientRect();

        noButton.style.position="fixed";

        noButton.style.left=rect.left+"px";

        noButton.style.top=rect.top+"px";

        activated=true;
    }

    const safeTop=window.innerHeight*0.55;

    const maxX=window.innerWidth-noButton.offsetWidth-20;

    const maxY=window.innerHeight-noButton.offsetHeight-20;

    const x=Math.random()*maxX;

    const y=safeTop+Math.random()*(maxY-safeTop);

    noButton.style.left=x+"px";

    noButton.style.top=y+"px";

    noButton.style.transform=`rotate(${Math.random()*20-10}deg)`;

}

noButton.addEventListener("mouseenter",moveButton);

noButton.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveButton();

});