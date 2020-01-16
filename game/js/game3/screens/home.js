import {
  getBoardButtons,
  backToMenu,
  getNamedButtons,
  subscribe,
  subscribeAll,
} from "../helpers";
import { game } from "../game";
import * as instructions from "./instructions"

let subscriptions = [];

export const leave = () => {
  subscriptions.forEach(unsubscribe => unsubscribe());
};

const withLeave = f => () => { leave(); f() }

export const enter = () => {
  const {
    goToHomepageButton,
    playButton,
    showInstructionsButton
  } = getNamedButtons();

  subscriptions = subscribeAll([
    [
      withLeave(backToMenu),
      [
        [window, "keydown", event => event.key === "Escape"],
        [goToHomepageButton, "click"]
      ]
    ],
    [
      withLeave(game),
      [
        [window, "keydown", event => event.key === "Enter"],
        [playButton, "click"]
      ]
    ],
    [
      withLeave(instructions.enter),
      [
        [window, "keydown", event => event.key === "i"],
        [showInstructionsButton, "click"]
      ]
    ]
  ]);
};

