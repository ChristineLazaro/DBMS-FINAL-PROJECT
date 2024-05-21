

 // Close the popup
 document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.form-popup').style.display = 'none';
  });

  // Switch to signup form
  document.querySelector('#signup-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.form-box.login').style.display = 'none';
    document.querySelector('.form-box.signup').style.display = 'block';
  });

  // Switch to login form
  document.querySelector('#login-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.form-box.signup').style.display = 'none';
    document.querySelector('.form-box.login').style.display = 'block';
  });

  // Login functionality
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login successful!');
        console.log('Redirecting to main.html');
        window.location.href = 'main.html';
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
        console.error(`Error: ${errorMessage}`);
      });
  });