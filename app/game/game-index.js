import SetupGame from "./setup-game.js";
import { settingsInputs } from "../../index.js";

const setupGame = new SetupGame();

export async function initializeGame() {	
	const data = {
		enemies: await setupGame.initializeEnemies(
			settingsInputs.enemiesNumber, 
			settingsInputs.difficulty
		),
		player: await setupGame.initializePlayer(
			settingsInputs.playerName, 
			settingsInputs.difficulty
		)
	}
	return data;
}

