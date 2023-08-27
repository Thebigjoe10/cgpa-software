const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const myModal = document.getElementById("myModal");

openModalBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevents the default behavior of clicking on a link element

  myModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  myModal.style.display = "none";
});

const formTitle = document.getElementById('formTitle');
const toggleForm = document.getElementById('toggleForm');
const actionButton = document.getElementById('actionButton');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

let isRegisterForm = false;

toggleForm.addEventListener('click', () => {
  isRegisterForm = !isRegisterForm;

  if (isRegisterForm) {
    formTitle.textContent = 'Register now!';
    toggleForm.textContent = 'Already have an account? Login';
    actionButton.textContent = 'Register';
  } else {
    formTitle.textContent = 'Login now!';
    toggleForm.textContent = 'Register account';
    actionButton.textContent = 'Login';
  }
});

actionButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (isRegisterForm) {
    // Registration logic
    const confirmPassword = prompt("Confirm your password:");
    if (password !== confirmPassword) {
      alert("Passwords don't match. Please try again.");
      return;
    }

    const username = prompt("Enter your desired username:");
    if (username) {
      alert('Registration successful! Welcome, ' + username + '!');
    }
  } else {
    // Login logic
    const loginPassword = prompt("Enter your password:");
    if (loginPassword === 'your-correct-password') { // Replace with actual correct password
      const username = prompt("Enter your username:");
      if (username) {
        alert('Login successful! Welcome back, ' + username + '!');
      }
    } else {
      alert('Login failed. Incorrect password.');
    }
  }
});