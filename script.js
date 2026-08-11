/* ========================================
   ДАННЫЕ САЙТА
======================================== */


/* Комплименты для Вики */

const compliments = [

    "🌸 Ты очень творческая",

    "🌸 И очень талантливая",

    "🌸 У тебя красивые голубые глаза",

    "🌸 Ты милая",

    "🌸 И очень красивая!",

    "🌸 Начитанная!",

    "🌸 И умная",

    "🌸 У тебя отличное чувство юмора",

    "🌸 И у тебя хороший музыкальный вкус",

    "🌸 Ты одна из самых прекрасных людей, кого я встречал!"

];


/* Мои особенности */

const myFeatures = [

    "❤️ Лютейший игроман",

    "❤️ Игрок в доту)",

    "❤️ Ни кем не целованный",

    "❤️ Серьезные траблы со здоровьем(",

    "❤️ Порой депрессивный и ноющий",

    "❤️ В голове у меня каша из мыслей",

    "❤️ И связей у меня нету",

    "❤️ Временами извращенный и пошлый",

    "❤️ Возможно буду надоедать",

    "❤️ Ни всегда уверенный, стеснительный мальчик("

];


/* Фразы убегающей кнопки */

const phrases = [

    "💔 Ты мне не интересен",

    "😝 Не получится",

    "😂 Хорошая попытка",

    "👀 Мимо",

    "🏃 Попробуй поймай",

    "💔 Даже не думай",

    "🥺 Может не надо?",

    "👀 Я слежу за тобой"

];



/* ========================================
   ЭЛЕМЕНТЫ СТРАНИЦЫ
======================================== */


const noButton =
    document.getElementById("noButton");

const yesButton =
    document.getElementById("yesButton");

const chapter1 =
    document.getElementById("chapter1");

const chapter2 =
    document.getElementById("chapter2");

const chapter3 =
    document.getElementById("chapter3");

const complimentsContainer =
    document.getElementById("complimentsContainer");

const nextCompliment =
    document.getElementById("nextCompliment");

const myFeaturesContainer =
    document.getElementById("myFeaturesContainer");

const nextFeature =
    document.getElementById("nextFeature");



/* ========================================
   ПЕРЕМЕННЫЕ
======================================== */


let tries = 0;

let activated = false;

let complimentIndex = 0;

let featureIndex = 0;



/* ========================================
   КРАСНАЯ УБЕГАЮЩАЯ КНОПКА
======================================== */


function moveButton(){

    tries++;


    if(tries === 5){

        alert("😅 Уже 5 попыток...");

    }


    if(tries === 10){

        alert("😂 Ты очень настойчивая.");

    }


    if(tries === 20){

        alert("🏆 Достижение получено!");

    }


    noButton.textContent =
        phrases[
            Math.floor(
                Math.random() * phrases.length
            )
        ];


    if(!activated){

        const rect =
            noButton.getBoundingClientRect();

        noButton.style.position = "fixed";

        noButton.style.left =
            rect.left + "px";

        noButton.style.top =
            rect.top + "px";

        activated = true;

    }


    const safeTop =
        window.innerHeight * 0.55;

    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        20;

    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        20;


    const x =
        Math.random() * Math.max(maxX, 20);


    const y =
        safeTop +
        Math.random() *
        Math.max(
            maxY - safeTop,
            20
        );


    noButton.style.left =
        x + "px";

    noButton.style.top =
        y + "px";


    noButton.style.transform =
        `rotate(${Math.random() * 20 - 10}deg)`;

}


noButton.addEventListener(
    "mouseenter",
    moveButton
);


noButton.addEventListener(
    "touchstart",
    function(event){

        event.preventDefault();

        moveButton();

    }
);



/* ========================================
   ПЕРЕХОД С ГЛАВЫ 1 НА ГЛАВУ 2
======================================== */


yesButton.onclick = function(){

    chapter1.classList.add("fade-out");


    setTimeout(function(){

        chapter1.classList.add("hidden");

        chapter2.classList.remove("hidden");

        chapter2.classList.add("fade-in");

    },800);

};



/* ========================================
   ГЛАВА 2
   КОМПЛИМЕНТЫ
======================================== */


nextCompliment.onclick = function(){

    /*
       Если комплименты закончились,
       значит сейчас можно переходить
       к следующей главе.
    */

    if(complimentIndex >= compliments.length){

        goToChapter3();

        return;

    }


    /*
       Создаем новую карточку
    */

    const div =
        document.createElement("div");


    div.className =
        "compliment";


    div.textContent =
        compliments[complimentIndex];


    complimentsContainer.appendChild(div);


    complimentIndex++;


    /*
       После 10-го комплимента
       кнопка становится зеленой.
    */

    if(complimentIndex === compliments.length){

        nextCompliment.textContent =
            "💚 Продолжить";


        nextCompliment.classList.add(
            "continue-button"
        );

    }

};



/* ========================================
   ПЕРЕХОД НА ГЛАВУ 3
======================================== */


function goToChapter3(){

    chapter2.classList.add("fade-out");


    setTimeout(function(){

        chapter2.classList.add("hidden");

        chapter3.classList.remove("hidden");

        chapter3.classList.add("fade-in");

    },800);

}



/* ========================================
   ГЛАВА 3
   МОИ ОСОБЕННОСТИ
======================================== */


nextFeature.onclick = function(){

    /*
       Если все особенности уже показаны,
       пока просто ничего не делаем.
       Позже сюда добавим переход
       на 4 главу.
    */

    if(featureIndex >= myFeatures.length){

        return;

    }


    /*
       Создаем карточку
    */

    const div =
        document.createElement("div");


    div.className =
        "compliment";


    div.textContent =
        myFeatures[featureIndex];


    myFeaturesContainer.appendChild(div);


    featureIndex++;


    /*
       После 10-й особенности
       кнопка становится зеленой.
    */

    if(featureIndex === myFeatures.length){

        nextFeature.textContent =
            "💚 Продолжить";


        nextFeature.classList.add(
            "continue-button"
        );

    }

};