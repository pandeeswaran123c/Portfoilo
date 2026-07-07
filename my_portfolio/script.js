// ===============================
// Typing Animation
// ===============================

const roles = [
    "Web Developer",
    "Flutter Developer",
    "Frontend Developer",
    "IT Support Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.querySelector(".home-text h2");

function typeEffect() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        roleElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".about-content,.card,.experience-box,.project,form"
);

function reveal() {

    revealElements.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();


// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.id = "topBtn";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Sticky Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
            form.querySelector('input[type="text"]').value.trim();

        const email =
            form.querySelector('input[type="email"]').value.trim();

        const message =
            form.querySelector("textarea").value.trim();

        if (name === "") {

            alert("Please enter your name.");

            return;

        }

        if (email === "") {

            alert("Please enter your email.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        if (message === "") {

            alert("Please enter your message.");

            return;

        }

        alert("Thank you! Your message has been submitted.");

        form.reset();

    });

}


// ===============================
// Highlight Active Link Style
// ===============================

const style = document.createElement("style");

style.innerHTML = `

nav a.active{

    color:#38bdf8;
    font-weight:600;

}

`;

document.head.appendChild(style);


// ===============================
// Console Welcome
// ===============================

console.log("Welcome to Pandeeswaran C's Portfolio 🚀");