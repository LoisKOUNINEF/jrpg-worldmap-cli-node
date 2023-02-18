import gradient from "gradient-string";
import { randomRange } from "../../helpers/random.js";
import { blankLine } from "../messages/default-messages.js";
import { betterWeapon, largeHealthPack, nothingFound, regularHealthPack } from "../messages/human-player-messages.js";
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
		
		return await this.attacks(enemy);
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
			betterWeapon(weaponRandom);
			return this.weaponLevel = weaponRandom;
		} else {
			nothingFound();
			return;
		}
	}

	async searchMedkit() {
		const medkit = randomRange(1, 6);
		
		if (medkit === 1) {
			nothingFound();
			return;
		};
		if (medkit > 1 && medkit < 6){
			regularHealthPack();
			return this.lifePoints += 50;
		};
		if (medkit === 6){
			largeHealthPack();
			return this.lifePoints += 100;
		}
	}

}
