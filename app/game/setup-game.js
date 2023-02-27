import Player from '../players/player.js'
import { sample } from "../helpers/random.js";
import { enemiesNames } from '../players/enemies-names.js';
import { bosses } from '../players/bosses.js';
import Priest from '../players/priest.js';
import Warrior from '../players/warrior.js';
import Rogue from '../players/rogue.js';

export default class SetupGame {
	
	enemiesNames = enemiesNames;
	bosses = bosses
	enemies = [];
	player;

	async initializeEnemies(enemiesNumber, difficulty) {
		for(let i = 0; i < enemiesNumber; i++) {
			let enemyName = sample(this.enemiesNames);
			let enemy = new Player(enemyName, difficulty)
			this.enemies.push(enemy);
			this.enemiesNames = this.enemiesNames
				.filter((name) => {
					return name !== enemyName
				}
			); 
		}
		return this.enemies;
	}

	async initializeBoss(difficulty) {
		let boss = sample(this.bosses);
		if (boss.class === 'Priest') {
			return this.boss = new Priest(boss.name, difficulty)
		}
		if (boss.class === 'Rogue') {
			return this.boss = new Rogue(boss.name, difficulty)
		}
		return this.boss = new Warrior(boss.name, difficulty)
	}

	async initializePlayer(playerClass, name, difficulty) {
		if (playerClass === 'Priest') {
			return this.player = new Priest(name, difficulty)
		}
		if (playerClass === 'Rogue') {
			return this.player = new Rogue(name, difficulty)
		}
		return this.player = new Warrior(name, difficulty)
	}
}
