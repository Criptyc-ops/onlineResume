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


// Dark mode toggle functionality
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.id = 'dark-mode-toggle';
document.getElementById('contact-info').appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add dark mode styles dynamically
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    body.dark-mode {
        background-color: #121212;
        color: #e0e0e0;
    }

    body.dark-mode header h1,
    body.dark-mode header p,
    body.dark-mode nav ul li a,
    body.dark-mode footer,
    body.dark-mode ul,
    body.dark-mode li,
    body.dark-mode P{
        color: #e0e0e0;
    }

    body.dark-mode header button {
        background-color: #e0e0e0;
        color: #121212;
    }

    body.dark-mode header button:hover {
        background-color: #cfcfcf;
    }

    body.dark-mode nav ul li a:hover {
        background-color: #333;
    }

    body.dark-mode main section {
        background-color: #1e1e1e;
        color: #e0e0e0;
    }

    body.dark-mode main section h2 {
        color: #ffffff;
    }
`;
document.head.appendChild(darkModeStyles);

// Hide all information except for the h2 elements
document.querySelectorAll('main section').forEach(section => {
    const content = Array.from(section.children).filter(child => child.tagName !== 'H2');
    content.forEach(child => {
        child.style.maxHeight = '0';
        child.style.overflow = 'hidden';
        child.style.transition = 'max-height 0.3s ease';
    });

    // Add click event to toggle visibility
    section.querySelector('h2').addEventListener('click', () => {
        content.forEach(child => {
            if (child.style.maxHeight === '0px' || !child.style.maxHeight) {
                child.style.maxHeight = child.scrollHeight + 'px';
            } else {
                child.style.maxHeight = '0';
            }
        });
    });
});