import { getBoardButtons, backToMenu, getNamedButtons, subscribe } from "../helpers";
import { game } from "../game";
import { showInstructions } from "../instruction";
import { setKeymap } from "../keyboard";

export const home = () => {
  const subscriptions = [];

  const enter = () => {
    const {
      goToHomepageButton,
      playButton,
      showInstructionsButton
    } = getNamedButtons();

    subscriptions.push(
      subscribe(goToHomepageButton, 'click', backToMenu),
      subscribe(playButton, 'click', game),
      subscribe(showInstructionsButton, 'click', showInstructions)
    )

    setKeymap({
      Enter: game,
      Escape: backToMenu,
      i: showInstructions
    });
  };

  const leave = () => {
    subscriptions.forEach(unsubscribe => unsubscribe())
    setKeymap({});
  }

  return {
    enter,
    leave
  };
};
