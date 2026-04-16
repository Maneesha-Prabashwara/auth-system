// Register Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const data = {
        username: document.getElementById('username').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      };

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      const msgDiv = document.getElementById('message');
      
      if (result.success) {
        msgDiv.className = 'success';
        msgDiv.textContent = result.message;
        registerForm.reset();
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1000);
      } else {
        msgDiv.className = 'error';
        msgDiv.textContent = result.message;
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const data = {
        username: document.getElementById('loginUsername').value,
        password: document.getElementById('loginPassword').value
      };

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      const msgDiv = document.getElementById('loginMessage');
      
      if (result.success) {
        msgDiv.className = 'success';
        msgDiv.textContent = result.message;
        loginForm.reset();
      } else {
        msgDiv.className = 'error';
        msgDiv.textContent = result.message;
      }
    });
  }
});
