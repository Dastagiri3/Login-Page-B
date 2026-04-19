document.getElementById("loginBtn").addEventListener("click", login);

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === "" || password === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
        return;
    }

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.innerText = "Login Successful!";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Username or Password!";
    }
}
