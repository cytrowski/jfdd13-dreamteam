import { setKeymap } from "./keyboard";

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

export const subscribe = (element, event, handler, key) => {
  element.addEventListener(event, handler);
  setKeymap;
  const unsubscribe = () => {
    element.removeEventListener(event, handler);
  };
  return unsubscribe;
};

const defaultChecker = () => true;

const defaultMapper = event => event;

export const subscribeAll = items => {
  console.log(items);
  return items.flatMap(([handler, sets]) => {
    console.log(sets);
    return sets.map(
      ([element, event, checker = defaultChecker, mapper = defaultMapper]) => {
        const callback = event => {
          if (checker(event)) {
            handler(mapper(event));
          }
        };
        element.addEventListener(event, callback);

        return () => element.removeEventListener(event, callback);
      }
    );
  });
};
