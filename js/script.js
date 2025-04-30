// Smooth scrolling animation for nav bar links and buttons
document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('nav a, button[data-target]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.tagName === 'BUTTON' 
                ? link.getAttribute('data-target') 
                : link.getAttribute('href').substring(1); // Remove the '#' from href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});