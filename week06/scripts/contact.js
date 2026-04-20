const buttons = document.querySelectorAll(".open-button");
const dialogs = document.querySelectorAll("dialog");
const closeBtns = document.querySelectorAll(".close-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.modal);
    modal.showModal();
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
  });
});




const form = document.querySelector(".contact-form");

// SAVE DATA TO LOCAL STORAGE
if(form)
form.addEventListener("submit", (e) => {
  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };


  localStorage.setItem("contactData", JSON.stringify(formData));
});


// LOAD SAVED DATA (AUTO-FILL)
window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("contactData"));

  if (savedData) {
    form.name.value = savedData.name || "";
    form.email.value = savedData.email || "";
    form.subject.value = savedData.subject || "";
    form.message.value = savedData.message || "";
  }
});

// VALIDATION
form.addEventListener("submit", (e) => {
  if (form.name.value.trim() === "") {
    alert("Please enter your name");
    e.preventDefault();
  }

  if (!form.email.value.includes("@")) {
    alert("Enter a valid email");
    e.preventDefault();
  }
});