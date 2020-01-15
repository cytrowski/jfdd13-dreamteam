const getByIds = ids => ids.map(id => document.getElementById(id));

export const showInstructions = () => {
  const [modal, closeIcon, closeBtn] = getByIds([
    "modalInstruction",
    "iconInstructionClose",
    "btnInstructionClose"
  ]);

  const hideModal = () => {
    modal.style.display = "none";
    closeIcon.removeEventListener("click", hideModal);
    closeBtn.removeEventListener("click", hideModal);
    window.removeEventListener("click", handleOutsideModalClick);
  };

  const showModal = () => {
    modal.style.display = "flex";
  };

  const handleOutsideModalClick = event => {
    if (event.target === modal) {
      hideModal();
    }
  };

  closeIcon.addEventListener("click", hideModal);
  closeBtn.addEventListener("click", hideModal);
  window.addEventListener("click", handleOutsideModalClick);

  showModal();
};
