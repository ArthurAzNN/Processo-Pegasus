
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

function checkVisibility() {
    elementsToAnimate.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;


        if (elementPosition < viewportHeight - 100 && !element.classList.contains('visible')) {
            element.classList.add('visible');
        }
    });
}


function debounce(func, delay = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}


window.addEventListener('scroll', debounce(checkVisibility));
window.addEventListener('load', checkVisibility);
