const form = document.getElementById("contact-form");
const msg = document.getElementById("form-message");
const video = document.getElementById("submit-video");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        msg.textContent = "Please fill out all fields before submitting.";
        msg.style.color = "red";
        video.style.display = "none"; // hide video if previously shown
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        msg.textContent = "Please enter a valid email address.";
        msg.style.color = "red";
        video.style.display = "none";
        return;
    }

    msg.textContent = "Message sent! Thank you for reaching out.";
    msg.style.color = "green";

    // Show the video
    video.style.display = "block";
    video.currentTime = 0; // restart video
    video.play();

    form.reset();
});


const hamburgerCheckbox = document.getElementById("hamburger-checkbox");
const navbar = document.getElementById("navbar");

hamburgerCheckbox.addEventListener("change", () => {
    navbar.classList.toggle("show");
});