/* =====================================================
   ANAS SIDDIQ PORTFOLIO
   JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= DARK / LIGHT MODE ================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.innerHTML = `
        <i class="fa-solid fa-sun"></i>
    `;

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    if (isLight) {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeBtn.innerHTML = `
            <i class="fa-solid fa-sun"></i>
        `;

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeBtn.innerHTML = `
            <i class="fa-solid fa-moon"></i>
        `;

    }

});


/* ================= TYPING EFFECT ================= */

const typingElement =
    document.querySelector(".typing");

const words = [
    " & Web Designer",
    " & UI Developer",
    " & Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 90
    );

}

typingEffect();


/* ================= COUNTERS ================= */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            Math.max(
                1,
                Math.ceil(target / 60)
            );

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.textContent =
                    target;

                return;

            }

            counter.textContent =
                current;

            requestAnimationFrame(
                updateCounter
            );

        };

        updateCounter();

    });

}


/* ================= SCROLL OBSERVER ================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".section-heading, .about-card, .about-text, .skill-card, .project-card, .service-card, .contact-grid"
    )
    .forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


/* Counter observer */

const statsSection =
    document.querySelector(".stats-section");

const counterObserver =
    new IntersectionObserver(
        entries => {

            if (entries[0].isIntersecting) {

                startCounters();

            }

        },
        {
            threshold: 0.4
        }
    );

counterObserver.observe(statsSection);


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = contactForm.querySelector("textarea").value.trim();

        const mailSubject = encodeURIComponent(subject || `Portfolio enquiry from ${name}`);
        const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

        window.location.href = `mailto:muhammadanassiddiq14@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    });
}


/* ================= CURRENT YEAR ================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();


/* ================= PROJECT LINK EFFECT ================= */

document.querySelectorAll(".project-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                if (link.getAttribute("href") === "#") {

                    event.preventDefault();

                }

            }
        );

    });


/* ================= PARALLAX EFFECT ================= */

const heroVisual =
    document.querySelector(".hero-visual");

window.addEventListener("mousemove", event => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 80;

    const y =
        (window.innerHeight / 2 - event.clientY) / 80;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ================= HEADER SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 20);
    }
}, { passive: true });
