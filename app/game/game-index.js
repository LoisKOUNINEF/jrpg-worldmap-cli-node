import SetupGame from "./setup-game.js";

const setupGame = new SetupGame();

export async function initializeGame(enemiesNumber, difficulty, playerName) {	
	const data = {
		enemies: await setupGame.initializeEnemies(enemiesNumber, difficulty),
		player: await setupGame.initializePlayer(playerName, difficulty)
	}
	return data;
}

