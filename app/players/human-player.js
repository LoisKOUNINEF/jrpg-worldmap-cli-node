import gradient from "gradient-string";
import { randomRange } from "../../helpers/random.js";
import { blankLine } from "../messages/default-messages.js";
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
			blankLine();
			console.log(
				gradient.morning(`You found a level ${weaponRandom} weapon. Nice!`)
			)
			blankLine();
			return this.weaponLevel = weaponRandom;
		} else {
			blankLine();
			console.log(
				gradient.cristal(`You found a level ${weaponRandom} weapon. You keep your level ${this.weaponLevel} weapon.`)
			)
			blankLine();
			return;
		}
	}

	async searchMedkit() {
		const medkit = randomRange(1, 6);
		switch(true) {
		case (medkit === 1):
			blankLine();
			console.log(
				gradient.cristal(`No luck, you didn't find anything.`)
			)
			blankLine();
			break;
		case (medkit > 1 && medkit < 6):
			blankLine();
			console.log(
				gradient.morning(`You found a regular medkit. You gain 50 HP.`)
			)
			blankLine();
			return this.lifePoints += 50;
			break;
		case (medkit === 6):
			blankLine();
			console.log(
				gradient.morning(`You found a regular medkit. You gain 100 HP.`)
			)
			blankLine();
			return this.lifePoints += 100;
			break;
		default:
			break;
		}
	}

}
