const noButton = document.getElementById("noButton");

document.addEventListener("mousemove", (event)=>{

    const rect = noButton.getBoundingClientRect();

    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(
        event.clientX - buttonCenterX,
        event.clientY - buttonCenterY
    );

    if(distance < 150){

        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    }

});

document.getElementById("yesButton").addEventListener("click", ()=>{

    alert("❤️ Продолжение следует...");

});