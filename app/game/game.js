import Player from '../players/player.js'
import { sample } from "../../helpers/random.js";
import { enemiesNames } from '../../helpers/enemies-names.js';

export default class Game {
	enemiesNames = enemiesNames;
	randomName = Math.floor(Math.random() * this.enemiesNames.length);
	enemies = [];

	async initializeEnemies(enemiesNumber, difficulty) {
		for(let i = 0; i < enemiesNumber; i++) {
			let enemyName = sample(this.enemiesNames);
			let enemy = new Player(enemyName, difficulty)
			this.enemies.push(enemy);
			this.enemiesNames = this.enemiesNames
				.filter((name) => {return name !== enemyName}); 
		}
		return this.enemies;
	}
}
