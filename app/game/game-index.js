import SetupGame from "./setup-game.js";
import GameLoop from './game-loop.js'
import { settingsInputs } from "../../index.js";
import { initializeGame } from "../../index.js";

const setupGame = new SetupGame();

export async function getInitializeGame() {	
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

export async function getGameLoop() {
	const gameLoop = new GameLoop(
		initializeGame.player, 
		initializeGame.enemies
	)
	gameLoop.isStillOngoing();
}
