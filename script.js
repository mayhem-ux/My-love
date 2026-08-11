const compliments = [

"🌸 Ты очень творческая",

"🌸 И очень талантливая",

"🌸 У тебя красивые голубые глаза",

"🌸 Ты милая",

"🌸 И очень красивая!",

"🌸 Начитаная!",

"🌸 И умная",

"🌸 У тебя отличное чувство юмора",

"🌸 И у тебя хороший музыкальный вкус",

"🌸 Ты одна из самых прекрасных людей кого я встречал!"

];
const myFeatures = [

    "😂 Здесь будет моя особенность №1",

    "🎮 Здесь будет моя особенность №2",

    "😴 Здесь будет моя особенность №3",

    "☕ Здесь будет моя особенность №4",

    "🤦 Здесь будет моя особенность №5",

    "😎 Здесь будет моя особенность №6",

    "🧠 Здесь будет моя особенность №7",

    "❤️ Здесь будет моя особенность №8",

    "🙃 Здесь будет моя особенность №9",

    "💀 Здесь будет моя особенность №10"

];
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
const yesButton = document.getElementById("yesButton");

const chapter1 = document.getElementById("chapter1");

const chapter2 = document.getElementById("chapter2");

const complimentsContainer =
document.getElementById("complimentsContainer");

const nextCompliment =
document.getElementById("nextCompliment");
const chapter3 =
document.getElementById("chapter3");

const myFeaturesContainer =
document.getElementById("myFeaturesContainer");

const nextFeature =
document.getElementById("nextFeature");

let featureIndex = 0;

let complimentIndex = 0;

yesButton.onclick=()=>{

    chapter1.classList.add("fade-out");

    setTimeout(()=>{

        chapter1.classList.add("hidden");

        chapter2.classList.remove("hidden");

        chapter2.classList.add("fade-in");
        

    },600);

};

nextCompliment.onclick=()=>{

    if(complimentIndex<compliments.length){

        const div=document.createElement("div");

        div.className="compliment";

        div.textContent=compliments[complimentIndex];

        complimentsContainer.appendChild(div);

        complimentIndex++;

    }

    if(complimentIndex===compliments.length){

    nextCompliment.textContent="💚 Продолжить";

    nextCompliment.style.background="#6fd36f";

    nextCompliment.style.color="white";

}
if(complimentIndex >= compliments.length){

    chapter2.classList.add("fade-out");

    setTimeout(() => {

        chapter2.classList.add("hidden");

        chapter3.classList.remove("hidden");

        chapter3.classList.add("fade-in");

    }, 700);

    return;

}
};
nextFeature.onclick = () => {

    if(featureIndex < myFeatures.length){

        const div = document.createElement("div");

        div.className = "compliment";

        div.textContent = myFeatures[featureIndex];

        myFeaturesContainer.appendChild(div);

        featureIndex++;

        return;
    }

    nextFeature.textContent = "💚 Продолжить";

    nextFeature.style.background = "#6fd36f";

};