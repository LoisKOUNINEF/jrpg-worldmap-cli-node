import { getGameInputs } from "../inputs/inputs-index.js";
import GameMessages from "../messages/game-messages.js";

export default class GameLoop {

	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
		this.gameMessages = new GameMessages(player, enemies)
	}

	async gamePlay() {
		await getGameInputs()
	}

	async isStillOngoing() {
		while (
			this.isPlayerAlive(this.player) && 
			this.areEnemiesLeft(this.enemies)
			) {
			await this.gamePlay();
		}
		this.gameMessages.gameOver();
	}

	isPlayerAlive(player) {
		if (this.player.lifePoints > 0) {
			return true;
		}
	}
	
	areEnemiesLeft(enemies) {
		if (this.enemies.length > 0) {
			return true;
		}
	}
}
