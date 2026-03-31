// OPEN MODALS 
const openButtons = document.querySelectorAll(".open-button");
const closeButtons = document.querySelectorAll(".close-button");


openButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  });
});

// CLOSE MODALS


closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");
    if (modal) {
      modal.close();
    }
  });
});


