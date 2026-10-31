/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   1. TYPING ANIMATION
========================================= */

const typingText = document.getElementById("typingText");

const roles = [
    "web experiences.",
    "useful projects.",
    "clean interfaces.",
    "digital ideas."
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================================
   2. MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


/* Close menu after clicking a link */

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


/* =========================================
   3. ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   4. DARK / LIGHT MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeToggle.textContent = "☾";

    } else {

        themeToggle.textContent = "☼";

    }

});


/* =========================================
   5. PROJECT FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active state */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        /* Activate clicked button */

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        /* Show / hide projects */

        projectCards.forEach(function (project) {

            const category =
                project.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =========================================
   6. SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .stats-section, .learning-section, .contact-box"
    );


const observerOptions = {
    threshold: 0.12
};


const revealObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    }, observerOptions);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================
   7. CURRENT YEAR
========================================= */

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();


/* =========================================
   8. SMOOTH BUTTON FEEDBACK
========================================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.97)";

        setTimeout(function () {

            button.style.transform = "";

        }, 120);

    });

});