import GameInputs from "../inputs/game-inputs.js";
import GameMessages from "../messages/game-messages.js";
import EnemyActions from "./enemy-actions.js";
import { sleep } from '../../helpers/sleep.js'
import { randomRange, sample } from "../../helpers/random.js";

export default class GameLoop {

	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
		this.activeEnemies = [];
	}

	async gamePlay() {
		this.fillActiveEnemiesArray();
		const gameInputs = new GameInputs(this.player, this.activeEnemies);

		await gameInputs.getPlayerAction();

		this.removeDeadEnemies();

		const enemyActions = new EnemyActions(this.player, this.activeEnemies);

		await enemyActions.attackPlayer();

		await sleep();
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

	removeDeadEnemies() {
		return this.activeEnemies = this.activeEnemies.filter(enemy => enemy.lifePoints > 0);
	}

	fillActiveEnemiesArray() {
		const maxEnemies = this.activeEnemies.length;
		const enemiesIncoming = randomRange(1,4)
		if (maxEnemies >= 4 || enemiesIncoming === 1) {
			return this.activeEnemies;
		}

		for(let i = 0; i < (enemiesIncoming - maxEnemies); i++) {
      let enemy = sample(this.enemies);
      this.activeEnemies.push(enemy);
      this.enemies = this.enemies.filter(enemy =>
        !this.activeEnemies.includes(enemy)
      )
    }
    return this.activeEnemies;
	}
}
