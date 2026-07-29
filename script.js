/* ===================================
   WEDDING DATE
=================================== */


// Change this to your wedding date & time
const weddingDate = new Date("August 29, 2026 12:00:00").getTime();


/* ===================================
   LIVE COUNTDOWN
=================================== */

const countdown = setInterval(function(){

    const now = new Date().getTime();

    const difference = weddingDate - now;

    if(difference <= 0){

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        document.querySelector(".countdown h2").innerHTML =
        "🎉 Today is the Wedding Day! 🎉";

        return;

    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML =
    String(hours).padStart(2,"0");

    document.getElementById("minutes").innerHTML =
    String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerHTML =
    String(seconds).padStart(2,"0");

},1000);


/* ===================================
   SCROLL ANIMATION
=================================== */

const sections = document.querySelectorAll(
".details,.verse,.couple,.video,.location" 
);

sections.forEach(function(section){

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "1s";

});

window.addEventListener("scroll",function(){

    sections.forEach(function(section){

        const top = section.getBoundingClientRect().top;

        const trigger = window.innerHeight - 120;

        if(top < trigger){

            section.style.opacity = "1";

            section.style.transform = "translateY(0px)";

        }

    });

});




/* ===================================
   BUTTON HOVER EFFECT
=================================== */

const buttons = document.querySelectorAll("button");

buttons.forEach(function(btn){

    btn.addEventListener("mouseover",function(){

        btn.style.boxShadow =
        "0px 10px 25px rgba(212,175,55,.5)";

    });

    btn.addEventListener("mouseout",function(){

        btn.style.boxShadow = "none";

    });

});


/* ===================================
   PAGE LOADED
=================================== */

window.onload = function(){

    console.log("Wedding Invitation Loaded Successfully");

};
/* ===========================
   LOADER
=========================== */

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(function () {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 1200);

});

document.fonts.ready.then(() => {

    document.getElementById("loader").style.visibility = "visible";

});	

/* ===========================
   BACKGROUND MUSIC
=========================== */
const music = document.getElementById("bgmusic");

const musicBtn = document.getElementById("musicBtn");

const weddingVideo = document.getElementById("weddingVideo");

let musicStarted = false;

async function startBackgroundMusic() {

    if (musicStarted) return;

    try {

        music.volume = 1;
        music.muted = false;

        await music.play();

        musicStarted = true;

        musicBtn.textContent = "🔊";

    } catch (err) {

        console.log(err);

    }

}

/* ===========================
   MUSIC FADE FUNCTIONS
=========================== */

function fadeOutMusic(duration = 500) {

    music.muted = false;

    const step = 50;
    const fadeAmount = music.volume / (duration / step);

    const fade = setInterval(() => {

        if (music.volume > fadeAmount) {

            music.volume -= fadeAmount;

        } else {

            music.volume = 0;
            music.muted = true;
            clearInterval(fade);

        }

    }, step);

}


function fadeInMusic(duration = 500) {

    music.muted = false;
    music.volume = 0;

    const step = 50;
    const fadeAmount = 1 / (duration / step);

    const fade = setInterval(() => {

        if (music.volume < 1 - fadeAmount) {

            music.volume += fadeAmount;

        } else {

            music.volume = 1;
            clearInterval(fade);

        }

    }, step);

}

if (weddingVideo) {

    weddingVideo.addEventListener("play", function () {

        fadeOutMusic();
        musicBtn.textContent = "🔇";

    });

    weddingVideo.addEventListener("pause", function () {

        fadeInMusic();
        musicBtn.textContent = "🔊";

    });

    weddingVideo.addEventListener("ended", function () {

        fadeInMusic();
        musicBtn.textContent = "🔊";

    });

}

musicBtn.addEventListener("click", async function () {

    // First click ever → Start music
    if (!musicStarted) {

        await startBackgroundMusic();
        return;

    }

    // Afterwards → Normal mute/unmute
    music.muted = !music.muted;

    musicBtn.textContent = music.muted ? "🔇" : "🔊";

});
/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ===========================
   SCROLL REVEAL
=========================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

/* ===========================
   ROSE PETALS
=========================== */

const petals = document.getElementById("petals");

const petalImages = [
    "assets/rose-petal-1.png",
    "assets/rose-petal-2.png"
    ];

for (let i = 0; i < 20; i++) {

    const petal = document.createElement("img");

    petal.className = "petal";

    petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.width = (18 + Math.random() * 18) + "px";

    petal.style.animationDuration = (10 + Math.random() * 8) + "s";

    petal.style.animationDelay = Math.random() * 8 + "s";

    petals.appendChild(petal);

}

/* ===================================
   COUPLE ANIMATION
=================================== */

const frames = [
    "images/frame1.png",
    "images/frame2.png",
    "images/frame3.png",
    "images/frame4.png",
    "images/frame5.png",
    "images/frame6.png"
];

const coupleFrame = document.getElementById("coupleFrame");

let currentFrame = 0;

setInterval(function(){

    currentFrame++;

    if(currentFrame >= frames.length){
        currentFrame = 0;
    }

    coupleFrame.src = frames[currentFrame];

},700);

function openInvitation() {
    
    // Start music
    startBackgroundMusic();
    
    // Scroll to invitation
    document.querySelector("#details").scrollIntoView({
        behavior: "smooth"
    });

}

const heart = document.getElementById("loveHeart");
const heartHint = document.getElementById("heartHint");
function flashHint() {

    let count = 0;

    const flash = setInterval(() => {

        if (invitationStarted) {
            clearInterval(flash);
            heartHint.style.opacity = "0";
            return;
        }

        heartHint.style.opacity = heartHint.style.opacity == "1" ? "0" : "1";

        count++;

        if (count >= 6) {   // 6 toggles = 3 fade in/out cycles

            clearInterval(flash);

            heartHint.style.opacity = "0";

            if (!invitationStarted) {

                setTimeout(flashHint, 3000); // Wait 3 seconds then repeat

            }

        }

    }, 700);

}

flashHint();


const heartArrow = document.getElementById("heartArrow");

let invitationStarted = false;

heart.addEventListener("click", function () {

    if (invitationStarted) return;

    invitationStarted = true;

    heart.classList.add("pop");
    
    setTimeout(() => {

    heart.style.display = "none";

    heartArrow.classList.remove("hidden-heart");
    heartArrow.classList.add("show-heart");

},500);

    heartHint.style.display = "none";

    startBackgroundMusic();
    setTimeout(() => {

        heart.classList.remove("pop");

    },450);

});

function createSparkles(){

    const container = document.querySelector(".heart-container");

    for(let i=0;i<8;i++){

        const sparkle = document.createElement("span");

        sparkle.className = "sparkle";

        const angle = Math.random()*Math.PI*2;
        const distance = 40 + Math.random()*20;

        const x = Math.cos(angle)*distance;
        const y = Math.sin(angle)*distance;

        sparkle.style.setProperty("--x",`${x}px`);
        sparkle.style.setProperty("--y",`${y}px`);

        container.appendChild(sparkle);

        sparkle.addEventListener("animationend",()=>{
            sparkle.remove();
        });

    }

}