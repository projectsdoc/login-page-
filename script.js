function handleRegister() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    if (user && pass) {
        localStorage.setItem(user, pass); // "Saves" to the browser
        document.getElementById('message').innerText = "Registration Successful!";
    }
}

function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const storedPass = localStorage.getItem(user); // "Checks" the browser

    if (storedPass && storedPass === pass) {
        alert("Login Successful!");
    } else {
        document.getElementById('message').innerText = "Invalid Username or Password";
    }
}
