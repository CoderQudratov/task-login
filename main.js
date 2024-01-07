const elForm = document.getElementById("form");
const elNameInput = document.querySelector(".user-name");
const elPasswordInput = document.querySelector(".password");
const elUserNameErrorText = document.querySelector(".error-name");
const elPasswordErrorText = document.querySelector(".error-password");
const elBtn = document.querySelector(".submit-btn");

function handleCHange(event) {
  switch (event.target.id) {
    case "name":
      if (elNameInput.value != "Oybek") {
        elUserNameErrorText.classList.remove("d-none");
        elUserNameErrorText.classList.add("d-block");
        elBtn.disabled = true;
      } else {
        elUserNameErrorText.classList.remove("d-block");
        elUserNameErrorText.classList.add("d-none");
        elBtn.disabled = false;
      }
      break;
    case "password":
      if (elPasswordInput.value != "Oybek") {
        elPasswordErrorText.classList.remove("d-none");
        elPasswordErrorText.classList.add("d-block");
        elBtn.disabled = true;
      } else {
        elPasswordErrorText.classList.remove("d-block");
        elPasswordErrorText.classList.add("d-none");
        elBtn.disabled = false;
      }
      break;
    default:
      break;
  }
}
elNameInput.addEventListener("change", handleCHange);
elPasswordInput.addEventListener("change", handleCHange);
function handelSubmit(event) {
  event.preventDefault();
  window.location.replace("./home.html");
}
elForm.addEventListener("submit", handelSubmit);
