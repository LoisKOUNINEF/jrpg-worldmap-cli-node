import GameInputs from "../inputs/game-inputs.js";
import GameMessages from "../messages/game-messages.js";
import EnemyActions from "./enemy-actions.js";

export default class GameLoop {

	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	async gamePlay() {
		const gameInputs = new GameInputs(this.player, this.enemies);
		const enemyActions = new EnemyActions(this.player, this.enemies);

		await gameInputs.getPlayerAction();
		await enemyActions.attackPlayer();
		
		this.enemies = this.enemies.filter(enemy => enemy.lifePoints > 0)
	}

	async isStillOngoing() {
		const gameMessages = new GameMessages(this.player, this.enemies);
		while (
			this.isPlayerAlive(this.player) && 
			this.areEnemiesLeft(this.enemies)
			) {
			await this.gamePlay();
		}
		gameMessages.gameOver();
	}

	isPlayerAlive() {
		if (this.player.lifePoints > 0) {
			return true;
		}
	}
	
	areEnemiesLeft() {
		if (this.enemies.length > 0) {
			return true;
		}
	}

	removeDeadEnemy(enemyName, enemies) {
		return enemies.filter(enemy => enemy.name !== enemyName)
	}
}
