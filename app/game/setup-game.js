import Player from '../players/player.js'
import { sample } from "../helpers/random.js";
import { enemiesNames } from '../players/enemies-names.js';
import Monk from '../players/monk.js';
import Warrior from '../players/warrior.js';

export default class SetupGame {
	
	enemiesNames = enemiesNames;
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

	async initializePlayer(playerClass, name, difficulty) {
		if (playerClass === 'Monk') {
			return this.player = new Monk(name, difficulty)
		}
		return this.player = new Warrior(name, difficulty)
	}
}
