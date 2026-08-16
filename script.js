/* ========================================
   ДАННЫЕ САЙТА
======================================== */


/* Комплименты */

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


/* Фразы красной кнопки */

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
   ЭЛЕМЕНТЫ
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

const photoWall =
    document.getElementById("photoWall");

const threads =
    document.getElementById("threads");

const musicPlayer =
    document.getElementById("musicPlayer");

const continueAfterPhotos =
    document.getElementById("continueAfterPhotos");


/* ========================================
   ПЕРЕМЕННЫЕ
======================================== */


let tries = 0;

let activated = false;

let complimentIndex = 0;

let currentPhoto = 1;


/* ========================================
   КРАСНАЯ КНОПКА
======================================== */


function moveButton(){

    tries++;


    if(tries === 5){

        alert("Уже 5 попыток...");

    }


    if(tries === 10){

        alert("Ну-ну, пытайся дальше.");

    }


    if(tries === 20){

        alert("🏆 Достижение получено!");

    }


    noButton.textContent =
        phrases[
            Math.floor(
                Math.random() *
                phrases.length
            )
        ];


    if(!activated){

        const rect =
            noButton.getBoundingClientRect();

        noButton.style.position =
            "fixed";

        noButton.style.left =
            rect.left + "px";

        noButton.style.top =
            rect.top + "px";

        activated = true;

    }


    const safeTop =
        window.innerHeight * .55;


    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        20;


    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        20;


    const x =
        Math.random() *
        Math.max(maxX,20);


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
        `rotate(${Math.random()*20-10}deg)`;

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
   ГЛАВА 1 → ГЛАВА 2
======================================== */


yesButton.onclick = function(){

    chapter1.classList.add(
        "fade-out"
    );


    setTimeout(function(){

        chapter1.classList.add(
            "hidden"
        );

        chapter2.classList.remove(
            "hidden"
        );

        chapter2.classList.add(
            "fade-in"
        );

    },800);

};


/* ========================================
   ГЛАВА 2
======================================== */


nextCompliment.onclick = function(){

    if(
        complimentIndex >=
        compliments.length
    ){

        goToChapter3();

        return;

    }


    const div =
        document.createElement("div");


    div.className =
        "compliment";


    div.textContent =
        compliments[
            complimentIndex
        ];


    complimentsContainer.appendChild(
        div
    );


    complimentIndex++;


    if(
        complimentIndex ===
        compliments.length
    ){

        nextCompliment.textContent =
            "💚 Продолжить";

        nextCompliment.classList.add(
            "continue-button"
        );

    }

};


/* ========================================
   ГЛАВА 2 → ГЛАВА 3
======================================== */


function goToChapter3(){

    chapter2.classList.add(
        "fade-out"
    );


    setTimeout(function(){

        chapter2.classList.add(
            "hidden"
        );


        chapter3.classList.remove(
            "hidden"
        );


        chapter3.classList.add(
            "fade-in"
        );


        startPhotoChapter();


    },800);

}


/* ========================================
   ГЛАВА 3
   ФОТОГРАФИИ
======================================== */


/*
    Здесь указываем музыку для каждой
    фотографии.

    После загрузки своих MP3 просто
    поменяй названия файлов.
*/


const songs = [

    "music/song1.mp3",

    "music/song2.mp3",

    "music/song3.mp3",

    "music/song4.mp3",

    "music/song5.mp3",

    "music/song6.mp3"

];


/*
    Все фотографии
*/

const photos =
    document.querySelectorAll(
        ".polaroid"
    );


/* ========================================
   ЗАПУСК ФОТОГЛАВЫ
======================================== */


function startPhotoChapter(){

    currentPhoto = 1;

    showPhoto(1);

}


/* ========================================
   ПОКАЗАТЬ ФОТО
======================================== */


function showPhoto(number){

    const photo =
        document.querySelector(
            `.photo-${number}`
        );


    if(!photo){

        return;

    }


    photo.classList.add(
        "active-photo"
    );

}


/* ========================================
   ПОЛУЧИТЬ ЦЕНТР ФОТО
======================================== */


function getPhotoCenter(photo){

    const wallRect =
        photoWall.getBoundingClientRect();


    const photoRect =
        photo.getBoundingClientRect();


    return {

        x:
            (
                photoRect.left +
                photoRect.width / 2 -
                wallRect.left
            )
            /
            wallRect.width
            * 100,

        y:
            (
                photoRect.top +
                photoRect.height / 2 -
                wallRect.top
            )
            /
            wallRect.height
            * 100

    };

}


/* ========================================
   СОЗДАТЬ НИТЬ
======================================== */


function createThread(
    firstPhoto,
    secondPhoto
){

    const start =
        getPhotoCenter(
            firstPhoto
        );


    const end =
        getPhotoCenter(
            secondPhoto
        );


    const line =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );


    line.setAttribute(
        "x1",
        start.x
    );


    line.setAttribute(
        "y1",
        start.y
    );


    line.setAttribute(
        "x2",
        end.x
    );


    line.setAttribute(
        "y2",
        end.y
    );


    line.classList.add(
        "thread-line"
    );


    threads.appendChild(
        line
    );

}


/* ========================================
   ЗАПУСТИТЬ МУЗЫКУ
======================================== */


function playSong(number){

    const song =
        songs[number - 1];


    if(!song){

        return;

    }


    musicPlayer.pause();

    musicPlayer.currentTime = 0;

    musicPlayer.src = song;


    musicPlayer.volume = 0.18;


    musicPlayer.play()
        .catch(function(){

            console.log(
                "Браузер не разрешил воспроизведение."
            );

        });

}


/* ========================================
   НАЖАТИЕ НА ФОТО
======================================== */


photos.forEach(function(photo){

    photo.addEventListener(
        "click",
        function(){

            const number =
                Number(
                    photo.dataset.photo
                );


            /*
                Нельзя нажать на фотографию,
                которая еще не открыта.
            */

            if(
                number !== currentPhoto
            ){

                return;

            }


            /*
                Если это последняя фотография
            */

            if(
                number >= photos.length
            ){

                continueAfterPhotos.classList.add(
                    "visible"
                );

                return;

            }


            const nextNumber =
                number + 1;


            const nextPhoto =
                document.querySelector(
                    `.photo-${nextNumber}`
                );


            /*
                Показываем следующую
            */

            nextPhoto.classList.add(
                "active-photo"
            );


            /*
                Ждем немного,
                чтобы браузер успел
                отрисовать фотографию
            */

            setTimeout(function(){

                createThread(
                    photo,
                    nextPhoto
                );

            },100);


            /*
                Музыка
            */

            playSong(
                nextNumber
            );


            /*
                Следующая фотография
                становится активной
            */

            currentPhoto =
                nextNumber;


            /*
                После последней фотографии
                показываем кнопку
            */

            if(
                currentPhoto ===
                photos.length
            ){

                setTimeout(function(){

                    continueAfterPhotos.classList.add(
                        "visible"
                    );

                },700);

            }

        }
    );

});


/* ========================================
   КНОПКА ПОСЛЕ ФОТО
======================================== */


continueAfterPhotos.onclick =
    function(){

        musicPlayer.pause();

        /*
            Здесь позже сделаем
            переход на 4 главу.
        */

        alert(
            "Продолжение следует ❤️"
        );

    };