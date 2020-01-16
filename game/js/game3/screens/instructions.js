import { subscribeAll } from "../helpers";

const getByIds = ids => ids.map(id => document.getElementById(id));

let subscriptions = [];

export const leave = () => {
  subscriptions.forEach(unsubscribe => unsubscribe());
};
export const enter = () => {
  const [modal, closeIcon, closeBtn] = getByIds([
    "modalInstruction",
    "iconInstructionClose",
    "btnInstructionClose"
  ]);

  const hideModal = () => {
    modal.style.display = "none";
  };

  const showModal = () => {
    modal.style.display = "flex";
  };

  showModal();

  subscriptions = subscribeAll([
    [
      leave,
      [
        [window, "keydown", event => event.key === "Esc"],
        [window, "click", event => event.target === modal]
        [closeBtn, "click"],
        [closeIcon, "click"],
      ]
    ]
  ]).concat(hideModal);
};
