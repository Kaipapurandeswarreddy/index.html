document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Debugging logs
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Simple validation
    if (username === 'siri' && password === 'puri') {
      errorMessage.style.color = 'green';
      errorMessage.textContent = 'Login successful! Redirecting...';
      
      // Redirect to the next page after 1 second
      setTimeout(() => {
        window.location.href = 'page2/index.html'; // Redirecting to the new dist page
      }, 1000);
    } else {
      errorMessage.style.color = 'red';
      errorMessage.textContent = 'Invalid username or password';
    }
});
