import { home } from "./screens/home";
import { game } from "./screens/game";

const screens = {};
screens.home = home(screens);
screens.game = game(screens);

screens.home.enter()
