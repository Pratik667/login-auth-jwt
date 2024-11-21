const API_BASE = 'http://localhost:5000/api/auth';
let token = null;

// Register
async function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const response = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    alert(data.message);
}

// Login
async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
        token = data.token;
        alert('Login successful!');
    } else {
        alert(data.message);
    }
}

// Access Protected Route
async function accessProtected() {
    const response = await fetch(`${API_BASE}/protected`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    document.getElementById('response').innerText = response.ok
        ? JSON.stringify(data)
        : data.message;
}
