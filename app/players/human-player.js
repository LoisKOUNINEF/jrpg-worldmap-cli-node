import gradient from "gradient-string";
import { randomRange } from "../../helpers/random.js";
import Player from "./player.js";

export default class HumanPlayer extends Player {
	constructor(name, difficulty) {
		super (name);
		this.lifePoints = 100 * difficulty;
		this.weaponLevel = 1;
	}

	async attackEnemy(enemyName, enemies) {
		console.log(gradient.cristal(`${this.name} attacks ${enemyName}!`))
		const enemy = await this.findEnemyByName(enemyName, enemies)
		const damageTaken = this.computeDamage() * this.weaponLevel;
		console.log(gradient.teen(`deals ${damageTaken} damage`))
		return this.getsDamaged(enemy, damageTaken);
	}

	findEnemyByName(name, enemies) {
		const enemy = enemies.find(enemy => {
			return enemy.name === name
		});
		return enemy;
	}

	async searchWeapon() {
		const weaponRandom = randomRange(1, 6)
		if (this.weaponLevel < weaponRandom) {
			return this.weaponLevel = weaponRandom;
		} else {
			return;
		}
	}

	async searchMedkit() {
		const medkit = randomRange(1, 6);
		switch(true) {
		case (medkit === 1):
			break;
		case (medkit > 1 && medkit < 6):
			this.lifePoints += 50;
			break;
		case (medkit === 6):
			this.lifePoints += 100;
			break;
		default:
			break;
		}
	}
}