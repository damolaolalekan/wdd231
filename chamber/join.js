// Set timestamp
document.querySelector("#timestamp").value = new Date().toISOString();


// OPEN MODALS 

document.querySelectorAll(".membership-cards button").forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.showModal();
    }
  });
});


// CLOSE MODALS

document.querySelectorAll("dialog .close-btn").forEach(button => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    if (dialog) {
      dialog.close();
    }
  });
});


