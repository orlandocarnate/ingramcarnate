// set current year
// enter code here


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