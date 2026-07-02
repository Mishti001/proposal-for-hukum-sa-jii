// =========================
// PAGE NAVIGATION
// =========================

const pages = document.querySelectorAll(".page");

function showPage(pageNumber){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById("page"+pageNumber).classList.add("active");

}

// =========================
// BUTTONS
// =========================

const startBtn=document.getElementById("startBtn");
const nextBtn=document.getElementById("nextBtn");
const proposalBtn=document.getElementById("proposalBtn");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const marryBtn=document.getElementById("marryBtn");
const thinkBtn=document.getElementById("thinkBtn");

// =========================
// START
// =========================

startBtn.onclick=()=>{

showPage(2);

};

// =========================
// GAME
// =========================

let score=0;

const game=document.getElementById("gameArea");

const basket=document.getElementById("basket");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*90+"%";

heart.style.top="-30px";

game.appendChild(heart);

let y=-30;

const fall=setInterval(()=>{

y+=4;

heart.style.top=y+"px";

if(y>400){

clearInterval(fall);

heart.remove();

}
const heartRect = heart.getBoundingClientRect();
const basketRect = basket.getBoundingClientRect();

if (
    heartRect.bottom >= basketRect.top &&
    heartRect.left < basketRect.right &&
    heartRect.right > basketRect.left
) {

    score++;

    document.getElementById("score").innerHTML = score + " / 10";

    clearInterval(fall);

    heart.remove();

    if (score >= 10) {
        nextBtn.style.display = "inline-block";
    }
}
},10);

}

setInterval(()=>{

if(document.getElementById("page2").classList.contains("active")){

createHeart();

}

},900);
// =========================
// MOVE THE BASKET
// =========================

document.addEventListener("mousemove",(e)=>{

if(document.getElementById("page2").classList.contains("active")){

basket.style.left=(e.clientX-35)+"px";

}

});

document.addEventListener("touchmove",(e)=>{

if(document.getElementById("page2").classList.contains("active")){

basket.style.left=(e.touches[0].clientX-35)+"px";

}

});

// =========================
// NEXT PAGE
// =========================

nextBtn.onclick=()=>{

showPage(3);

};

// =========================
// RUNNING NO BUTTON
// =========================

function moveButton(button){

const x=Math.random()*(window.innerWidth-180);

const y=Math.random()*(window.innerHeight-120);

button.style.position="absolute";

button.style.left=x+"px";

button.style.top=y+"px";

}

noBtn.addEventListener("mouseover",()=>{

moveButton(noBtn);

});

noBtn.addEventListener("touchstart",()=>{

moveButton(noBtn);

});

// =========================
// YES BUTTON
// =========================

yesBtn.onclick=()=>{

showPage(4);

};

// =========================
// PHOTO PAGE
// =========================

proposalBtn.onclick=()=>{

showPage(5);

};

// =========================
// PROPOSAL PAGE
// =========================

thinkBtn.addEventListener("mouseover",()=>{

moveButton(thinkBtn);

});

thinkBtn.addEventListener("touchstart",()=>{

moveButton(thinkBtn);

});

marryBtn.onclick=()=>{

showPage(6);

};
// =========================
// FINAL CELEBRATION
// =========================

function celebrate() {

    for (let i = 0; i < 80; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * window.innerWidth + "px";

        heart.style.top = Math.random() * window.innerHeight + "px";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.animation = "beat 1s infinite";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }

}

marryBtn.addEventListener("click", () => {

    celebrate();

});

window.onload = () => {

    showPage(1);

};
const sealBtn = document.getElementById("sealBtn");
const marriageText = document.getElementById("marriageText");

sealBtn.onclick = () => {

    marriageText.style.display = "block";

    celebrate();

    sealBtn.innerHTML = "❤️ Deal Sealed ❤️";

    sealBtn.disabled = true;

};