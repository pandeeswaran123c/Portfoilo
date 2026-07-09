
// ========================================
// Typing Animation
// ========================================

const roles = [
    "Web Developer",
    "Flutter Developer",
    "Frontend Developer",
    "IT Support Engineer"
];

const typingText = document.querySelector(".home-text h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

    if(!typingText) return;

    const currentRole = roles[roleIndex];

    if(!deleting){

        typingText.textContent =
        currentRole.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===currentRole.length){

            deleting=true;

            setTimeout(typingEffect,1500);

            return;

        }

    }else{

        typingText.textContent =
        currentRole.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            roleIndex++;

            if(roleIndex>=roles.length){

                roleIndex=0;

            }

        }

    }

    setTimeout(typingEffect,deleting?60:120);

}

typingEffect();


// ========================================
// Smooth Scroll
// ========================================

const navLinks=document.querySelectorAll("#navbar a");

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            window.scrollTo({

                top:target.offsetTop-80,

                behavior:"smooth"

            });

        }

    });

});


// ========================================
// Navigation Click
// (No Default Active)
// ========================================

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ========================================
// Sticky Header
// ========================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>20){

        header.style.boxShadow=
        "0 8px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow="none";

    }

});


// ========================================
// Mobile Menu
// ========================================

const menuToggle=
document.getElementById("menu-toggle");

const navbar=
document.getElementById("navbar");

const icon=
menuToggle.querySelector("i");

menuToggle.addEventListener("click",()=>{

    navbar.classList.toggle("active");

    menuToggle.classList.toggle("active");

    if(navbar.classList.contains("active")){

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }

    else{

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});

//==========================
// Close Menu After Click
//==========================
document.querySelectorAll("#navbar a")

.forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});

// ========================================
// Scroll Reveal Animation
// ========================================

const revealElements = document.querySelectorAll(

    ".about-content,.card,.education-card,.certificate-card,.experience-box,.project,form"

);

function revealElementsOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 120){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealElementsOnScroll);

revealElementsOnScroll();


// ========================================
// Scroll To Top Button
// ========================================

const topButton=document.createElement("button");

topButton.id="topBtn";

topButton.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="flex";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ========================================
// Contact Form Validation
// ========================================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=form.querySelector('input[type="text"]').value.trim();

    const email=form.querySelector('input[type="email"]').value.trim();

    const message=form.querySelector("textarea").value.trim();

    if(name===""){

        alert("Please enter your name.");

        return;

    }

    if(email===""){

        alert("Please enter your email.");

        return;

    }

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){

        alert("Please enter a valid email address.");

        return;

    }

    if(message===""){

        alert("Please enter your message.");

        return;

    }

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

}


// ========================================
// Close Mobile Menu on Resize
// ========================================

window.addEventListener("resize",()=>{

    if(window.innerWidth>768){

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


// ========================================
// Close Menu When Clicking Outside
// ========================================

document.addEventListener("click",(e)=>{

    if(

        !navbar.contains(e.target) &&

        !menuToggle.contains(e.target)

    ){

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


// ========================================
// Footer Year
// ========================================

const footerText=document.querySelector("footer p");

if(footerText){

    footerText.innerHTML=
    `© ${new Date().getFullYear()} Pandeeswaran C. All Rights Reserved.`;

}

// ===============================
// Certificate Image Popup
// ===============================

function openModal(imageSrc){

    document.getElementById("imageModal").style.display="flex";

    document.getElementById("modalImage").src=imageSrc;

}

function closeModal(){

    document.getElementById("imageModal").style.display="none";

}

// Close modal when clicking outside the image
document.getElementById("imageModal").addEventListener("click",function(e){

    if(e.target===this){

        closeModal();

    }

});

// ========================================
// Console Message
// ========================================

console.log("%cWelcome to Pandeeswaran C Portfolio 🚀",
"color:#38bdf8;font-size:18px;font-weight:bold;");