document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const { email, password } = loginForm.elements;
        const trimmedEmail = email.value.trim();
        const trimmedPassword = password.value.trim();

        if (!trimmedEmail || !trimmedPassword) {
            return alert("All form fields must be filled in");
        }

        console.log({
            email: trimmedEmail,
            password: trimmedPassword,
        });

        loginForm.reset();
    });
});
