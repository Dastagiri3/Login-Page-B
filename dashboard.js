const user = localStorage.getItem("loggedInUser");
document.getElementById("welcome").innerText = "Welcome, " + user;
