import { instruction } from "./instruction";
import { gameIndex } from "./game-index";
import { scoreboard } from "./scoreboard/scoreboardLogic";
import { getBoardButtons, backToMenu } from "./helpers";
import { keySupport, game } from "./game";

instruction();
scoreboard();
gameIndex();

const boardButtons = getBoardButtons()

document.addEventListener("keydown", keySupport);
boardButtons[0].addEventListener("click", backToMenu);
boardButtons[1].addEventListener("click", game);
