// Intersection Observer for Scroll Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // If it's a container with staggered children
            const staggeredChildren = entry.target.querySelectorAll('.stagger-item');
            if (staggeredChildren.length > 0) {
                staggeredChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('active');
                    }, index * 150); // 150ms delay between items
                });
            }
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Navigation Background Change on Scroll
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 0';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.padding = '1rem 0';
        nav.style.boxShadow = 'none';
    }
});

// Mobile Menu Toggle (Simplified)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    // In a full implementation, this would show a mobile overlay
    alert('Mobile menu feature coming soon! Use the desktop links for now.');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handling (Prevent Default)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out, Hariram! This form is a demo, but your message intent was captured.');
    contactForm.reset();
});
