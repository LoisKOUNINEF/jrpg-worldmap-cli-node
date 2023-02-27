import GameInputs from "../inputs/game-inputs.js";
import GameMessages from "../messages/game-messages.js";
import EnemyActions from "./enemy-actions.js";
import { sleep } from '../helpers/sleep.js'
import { randomRange, sample } from "../helpers/random.js";
import { turnBegins } from "../messages/default-messages.js";

export default class GameLoop {

	constructor(player, enemies, boss) {
		this.player = player;
		this.enemies = enemies;
		this.boss = boss;
		this.activeEnemies = [];
	}

	async gamePlay() {
		turnBegins();

		this.fillActiveEnemiesArray();

		const gameInputs = new GameInputs(this.player, this.activeEnemies);

		await gameInputs.getPlayerAction();

		this.removeDeadEnemies();

		await sleep(2000);

		const enemyActions = new EnemyActions(this.player, this.activeEnemies);

		await enemyActions.attackPlayer();

		await sleep(2000);
	}

	async isStillOngoing() {
		while (
			this.isPlayerAlive() && 
			this.isBossAlive()
			) {
			await this.gamePlay();
		}
		this.isGameOver();
	}

	isGameOver() {
		const gameMessages = new GameMessages(
			this.player, 
			this.enemies, 
		);
		gameMessages.gameOver(this.activeEnemies);
	}

	isPlayerAlive() {
		if (this.player.lifePoints > 0) {
			return true;
		}
	}

	isBossAlive() {
		if(this.areEnemiesLeft && this.boss.lifePoints > 0) {
			return true;
		}
	}
	
	areEnemiesLeft() {
		if (this.enemies.length > 0 || this.activeEnemies.length > 0) {
			return true;
		}
	}

	removeDeadEnemies() {
		const aliveEnemies = 
		this.activeEnemies.filter(enemy => enemy.lifePoints > 0);

		const deadEnemies = this.activeEnemies.length - aliveEnemies.length;
		this.fillSpecialMeter(deadEnemies);

		return this.activeEnemies = aliveEnemies;
	}

	fillSpecialMeter(deadEnemies) {
		this.player.specialMeter += deadEnemies;
	}

	async fillActiveEnemiesArray() {
		if (!this.areEnemiesLeft()) {
			this.activeEnemies.push(this.boss)
			return this.activeEnemies;
		} else if (this.activeEnemies.length === 0) {
			return this.initalActiveEnemiesArray()
		} else if (this.enemies.length === 0) {
			return this.activeEnemies;
		}
    return this.refreshActiveEnemiesArray();
	}

	initalActiveEnemiesArray() {
		let maxRange = 2;
		if(this.enemies.length < 2) { maxRange = this.enemies.length}
		for(let i = 0; i < maxRange; i++) {
      let enemy = sample(this.enemies);
      this.activeEnemies.push(enemy);
      this.enemies = this.enemies.filter(enemy =>
        !this.activeEnemies.includes(enemy)
      )
    }
    return this.activeEnemies;
	}

	refreshActiveEnemiesArray() {
		const maxEnemies = this.activeEnemies.length;
		const maxRange = 4;

		if(maxRange < this.enemies.length) { 
			return this.initalActiveEnemiesArray()
		};

		const enemiesIncoming = randomRange(1,maxRange)
		
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
