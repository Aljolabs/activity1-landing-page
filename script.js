// Animation for home section
document.addEventListener("DOMContentLoaded", function() {
    const h3 = document.querySelector("#home .l-header");
    const h1 = document.querySelector("#home .text-container h1");
    const h2 = document.querySelector("#home .text-container h2");
    const btn = document.querySelector(".work-info button");

    btn.classList.add("fade-in");
    h3.classList.add("fade-in");
    h1.classList.add("fade-in");
    h2.classList.add("fade-in");
});

// typing roles
const roles = ['Front-End Developer', 'Back-End Developer', 'Full Stack Developer'];
let roleIndex = 0;
const roleElement = document.getElementById('role');

function typeRole() {
    roleElement.textContent = '';
    const role = roles[roleIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
        if (charIndex < role.length) {
            roleElement.textContent += role.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typeInterval);
            setTimeout(eraseRole, 1000);
        }
    }, 100);
}

function eraseRole() {
    const role = roles[roleIndex];
    let charIndex = role.length - 1;
    const eraseInterval = setInterval(() => {
        if (charIndex >= 0) {
            roleElement.textContent = role.substring(0, charIndex);
            charIndex--;
        } else {
            clearInterval(eraseInterval);
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        }
    }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
    typeRole();
});