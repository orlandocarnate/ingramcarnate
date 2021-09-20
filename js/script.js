// set current year
const currentYearId = document.getElementById('current-year');
currentYearId.innerText = new Date().getFullYear();

// Mobile Nav Menu
const headerEl = document.querySelector('header');
const navBtn = document.querySelector('btn-mobile-nav');

window.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
})

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a');

allLinks.forEach((link) => {
    link.addEventListener('click', (e)=> {
        e.preventDefault();
        const href = link.getAttribute('href');

        // scroll to top
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        if (href !== '#' && href.startsWith('#')) {
            const sectionElem = document.querySelector(href);
            sectionElem.scrollIntoView({
                behavior: "smooth"
            })
        }
    })
})

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {
    const sections = Array.from(document.getElementsByClassName('section-fade'));

    for (let section of sections) {
        observer.observe(section);
    }
});
