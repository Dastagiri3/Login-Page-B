document.getElementById("loginBtn").addEventListener("click", login);

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const result = loginUser(username, password);

    if (result.success) {
        message.style.color = "green";
        message.innerText = "Login successful!";
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.innerText = result.message;
    }
}
