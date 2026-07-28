/* ===================================
   WEDDING DATE
=================================== */

// Change this to your wedding date & time
const weddingDate = new Date("August 29, 2026 11:30:00").getTime();


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
".details,.verse,.couple,.video,.location,.rsvp" 
/* Deleted RSVP section need to deleted rsvp from here too*/
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

    }, 2500);

});
/* ===========================
   BACKGROUND MUSIC
=========================== */

const music = document.getElementById("bgmusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = function () {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "🔇";

        playing = true;

    }

    else {

        music.pause();

        musicBtn.innerHTML = "🔊";

        playing = false;

    }

};
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