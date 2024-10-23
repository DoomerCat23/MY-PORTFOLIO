window.addEventListener("scroll", function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
})

const serviceModals=document.querySelectorAll(".service-modal");
const learnmoreBtns=document.querySelectorAll(".learn-more-btn");
const modalCloseBtns=document.querySelectorAll(".modal-close-btn");

var modal=function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

const portfolioModals=document.querySelectorAll(".portfolio-model");
const imgCards=document.querySelectorAll(".img-card");
const portfolioCloseBtns=document.querySelectorAll(".portfolio-close-btn");

var portfolioModal=function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    let currentSectionId = "";

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSectionId = current.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-items a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSectionId)) {
            link.classList.add("active");
        }
    });
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a")

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//messa


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Create a FormData object from the form
        const formData = new FormData(this);

        // Send the form data to the Google Form
        fetch(this.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            // Check the response status
            if (response.ok || response.status === 302) { // Adjusted to handle redirect response
                alert('Thank you for your message! We will get back to you soon.'); // Custom confirmation message
                this.reset(); // Reset the form fields to clear input values
            } else {
                console.error('Response Status:', response.status);
                alert('There was a problem submitting your message. Please try again.'); // Error handling
            }
        })
        .catch(error => {
            console.error('Error:', error); // Log error for debugging
            alert('Thank you for your message! We will get back to you soon.');
        });
    });
});

ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 1200,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.contact-left li', { delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about-description, .contact-right', { delay: 600, origin: 'right'});
ScrollReveal().reveal('.about, .professional-list li', { delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .contact-left h2', { delay: 700, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.footer .group', { delay: 500, origin: 'top', interval: 200});







