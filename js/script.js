/*==================================================
HARDEN14
SCRIPT.JS v2.0
==================================================*/

"use strict";

/*==================================================
SELECTORS
==================================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

const animatedElements = document.querySelectorAll(
    ".about-home, .service-card, .card, .portfolio-card, .contact-info, .contact-form"
);

const galleryImages = document.querySelectorAll(
    ".gallery img, .portfolio-card img"
);

/*==================================================
MOBILE MENU
==================================================*/

if(menuToggle && navMenu){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("show");

        document.body.classList.toggle("menu-open");

        menuToggle.innerHTML = navMenu.classList.contains("show") ? "&times;" : "&#9776;";

    });

    document.querySelectorAll(".navbar a").forEach(link=>{

        link.addEventListener("click",()=>{

            navMenu.classList.remove("show");

            document.body.classList.remove("menu-open");

            menuToggle.innerHTML="&#9776;";

        });

    });

}

/*==================================================
SCROLL REVEAL
==================================================*/

if(animatedElements.length){

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    animatedElements.forEach(item=>observer.observe(item));

}

/*==================================================
LIGHTBOX
==================================================*/

let lightbox;

function closeLightbox(){

    if(lightbox){

        lightbox.remove();

        lightbox = null;

        document.body.style.overflow="";

    }

}

function openLightbox(src,alt){

    closeLightbox();

    lightbox=document.createElement("div");

    lightbox.className="lightbox";

    lightbox.innerHTML=`

        <span class="lightbox-close">&times;</span>

        <img src="${src}" alt="${alt}">

    `;

    document.body.appendChild(lightbox);

    requestAnimationFrame(()=>{

        lightbox.classList.add("active");

    });

    document.body.style.overflow="hidden";

    lightbox.addEventListener("click",e=>{

        if(

            e.target.classList.contains("lightbox") ||

            e.target.classList.contains("lightbox-close")

        ){

            closeLightbox();

        }

    });

}

galleryImages.forEach(image=>{

    image.style.cursor="zoom-in";

    image.addEventListener("click",()=>{

        openLightbox(image.src,image.alt);

    });

});

document.addEventListener("keydown",e=>{

    if(e.key==="Escape"){

        closeLightbox();

    }

});

/*==================================================
BACK TO TOP
==================================================*/

const backToTop=document.createElement("div");

backToTop.className="back-to-top";

backToTop.innerHTML="▲";

document.body.appendChild(backToTop);

window.addEventListener("scroll",()=>{

    backToTop.classList.toggle(

        "visible",

        window.scrollY>500

    );

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==================================================
CURRENT YEAR
==================================================*/

const currentYear=document.querySelector(".current-year");

if(currentYear){

    currentYear.textContent=new Date().getFullYear();

}

/*==================================================
ADVENTURE CARD
==================================================*/

const adventureCard = document.querySelector(".adventure-card");
const adventureServiceCard = document.querySelector(".adventure-service-card");

if (adventureCard) {

    adventureCard.addEventListener("click", () => {

        window.location.href = "pages/adventure.html";

    });

}
if (adventureServiceCard) {

    adventureServiceCard.addEventListener("click", () => {

        window.location.href = "adventure.html";

    });

}

/*==================================================
END OF FILE
==================================================*/