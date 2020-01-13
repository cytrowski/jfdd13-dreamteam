const getByIds = ids => ids.map(id => document.getElementById(id));

export const instruction = () => {
  
  const [modal, btn, span, closeBtn] = getByIds([
    "modalInstruction",
    "btnInstructionShow",
    "iconInstructionClose",
    "btnInstructionClose"
  ]);

  const hideModal = () => {
    modal.style.display = "none";
  }

  const showModal = () => {
    modal.style.display = "flex";
  };

  btn.onclick = showModal
  span.onclick = hideModal
  closeBtn.onclick = hideModal
  window.onclick = function(event) {
    if (event.target === modal) {
      hideModal()
    }
  };
};
