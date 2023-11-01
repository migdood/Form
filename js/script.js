const hideme = document.getElementById("hideme");
const hidemepassword = document.getElementById("hidemepassword");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

password.addEventListener("focus", () => {
  hideme.style.visibility = "visible";
});
password.addEventListener("blur", () => {
  if (password.value !== "" || password2.value !== "") {
    hideme.style.visibility = "visible";
  } else {
    hideme.style.visibility = "hidden";
  }
});
// Validation >:)
function checkPassword() {
  if (password.value !== "" && password2.value !== "") {
    if (password.value !== password2.value) {
      hidemepassword.textContent = "Passwords don't match";
      hidemepassword.style.visibility = "visible";
    } else {
      hidemepassword.style.visibility = "hidden";
    }
  } else {
    hidemepassword.style.visibility = "hidden";
  }
}
password2.addEventListener("input", checkPassword);
password.addEventListener("input", checkPassword);
