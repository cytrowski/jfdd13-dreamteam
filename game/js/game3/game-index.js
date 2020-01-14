import { game } from "./game";
import { getBoardButtons, backToMenu } from "./helpers";

export const gameIndex = () => {
  const boardButtons = getBoardButtons()
  boardButtons[1].addEventListener("click", game);
  boardButtons[0].addEventListener("click", backToMenu);
};
