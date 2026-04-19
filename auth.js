// Save user
function registerUser(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return { success: false, message: "User already exists!" };
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true };
}

// Login user
function loginUser(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (!user) {
        return { success: false, message: "Invalid credentials" };
    }

    localStorage.setItem("loggedInUser", username);
    return { success: true };
}

// Check login
function checkAuth() {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
        window.location.href = "index.html";
    }
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
