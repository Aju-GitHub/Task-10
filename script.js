function checkPasswords() {
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const error = document.getElementById("error-message");

  if (pass !== confirm) {
    error.textContent = "Passwords do not match!";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}