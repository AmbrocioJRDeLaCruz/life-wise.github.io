// login.js

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector("#main-container"); // Cambiado a #main-container

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

// Manejo de la redirección al hacer clic en Sign In o Sign Up
const redirectButton = (buttonId, targetPage) => {
    const button = document.querySelector(buttonId);
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = targetPage;
        });
    }
};

redirectButton("#sign-login-btn", "index.html");
redirectButton("#sign-signup-btn", "index.html");
