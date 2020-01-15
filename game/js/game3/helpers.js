export const backToMenu = () => {
  window.location.href = window.config.homepageUrl;
};

export const getBoardButtons = () =>
  document.querySelectorAll("button.board__btn");

export const getNamedButtons = () => {
  const [
    goToHomepageButton,
    playButton,
    showInstructionsButton
  ] = getBoardButtons();
  return { goToHomepageButton, playButton, showInstructionsButton };
};

export const subscribe = (element, event, handler) => {
  element.addEventListener(event, handler);
  const unsubscribe = () => element.removeEventListener(event, handler);
  return unsubscribe;
};
