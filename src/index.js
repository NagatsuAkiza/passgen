let passwordLenght = document.getElementById("passwordLenght");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(len) {
  const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-;:'/?.,<>`~";

  let data = lowerAlpha + upperAlpha + numeric + symbol;

  if (len < 8) {
    alert("The password length must be at least 8 characters.");
    return;
  }

  if (len > 100) {
    alert("The password length cannot exceed 100.");
    return;
  }

  let generator = "";
  for (let i = 0; i < len; i++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }

  return generator;
}

function getPassword() {
  const passwordLength = parseInt(passwordLenght.value); // Parse input value as an integer
  if (isNaN(passwordLength) || passwordLength <= 0) {
    alert("Please enter a valid password length.");
    return;
  }

  const newPassword = generatePassword(passwordLength);
  if (newPassword) {
    // Check if newPassword is defined
    password.value = newPassword;
  } else {
    alert("Failed to generate password. Please try again.");
  }
}

function savePassword() {
  let mypass = password.value;
  if (mypass.trim() === "") {
    alert("Please generate a password first.");
    return;
  }

  const data = new Blob([`Password: ${mypass}`], { type: "text/plain" });
  const url = window.URL.createObjectURL(data);

  const link = document.createElement("a");
  link.href = url;
  link.download = "mypassword.txt";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
