
//password error
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");


const passwordMatchError = document.getElementById("confirm-password-error");

document.querySelector("form").addEventListener("submit", (event) => {
  
  if (passwordInput.value !== confirmPasswordInput.value) {
    
    event.preventDefault();
    passwordMatchError.textContent = "Passwords do not match";
  } else {
    
    passwordMatchError.textContent = "";
  }
});

//email error
const emailInput = document.getElementById("email-address");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", () => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address";
    } else {
      emailError.textContent = "";
    }
  });
  

//phone number error

const phoneInput = document.getElementById("phone-number");
const phoneError = document.getElementById("tel-error");

phoneInput.addEventListener("input", () => {
  const phoneNumber = phoneInput.value;
  const phoneNumberPattern = /^\d{10}$/;
  const isValidPhoneNumber = phoneNumberPattern.test(phoneNumber);
  if (!isValidPhoneNumber) {
    phoneError.textContent = "Please enter a valid phone number (10 digits)";
  } else {
    phoneError.textContent = "";
  }
});

