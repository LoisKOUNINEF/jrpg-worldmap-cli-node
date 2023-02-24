import { randomRange } from "../helpers/random.js";
import { damageTaken, defeated } from "../messages/player-messages.js";
import { 
	betterWeapon, 
	enemyTargeted, 
	largeMedkit, 
	nothingFound, 
	regularMedkit, 
	armorFound 
} from "../messages/human-player-messages.js";
import Player from "./player.js";

export default class HumanPlayer extends Player {
	constructor(name, difficulty) {
		super (name);
		this.lifePoints = 100 * difficulty;
		this.weaponLevel = 1;
		this.armorLevel = 0;
	}

	async attackEnemy(enemyName, enemies) {
		enemyTargeted(this.name, enemyName);

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
		const weaponRandom = randomRange(1, 6);

		if (this.weaponLevel < weaponRandom) {
			betterWeapon(weaponRandom);
			return this.weaponLevel = weaponRandom;
		};

		nothingFound();
		return;
	}

	async searchMedkit() {
		const medkit = randomRange(1, 6);
		
		if (medkit === 1) {
			nothingFound();
			return;
		};
		if (medkit === 6){
			largeMedkit();
			return this.lifePoints += 100;
		};

		regularMedkit();
		return this.lifePoints += 50;
	}

	async searchArmor() {
		if (randomRange(1,6) < 4) {
			return nothingFound();
		}
		const armor = randomRange(1,3);
		armorFound(armor);
		return this.armorLevel = armor;
	}

	getsDamaged(damage) {
		let mitigateDamage = damage - this.armorLevel;

		if (mitigateDamage < 0) { 
			mitigateDamage = 0 
		};
		if (mitigateDamage !== 0){
			damageTaken(mitigateDamage);
		};

		const playerHP = this.lifePoints - mitigateDamage;
		if(playerHP <= 0) {
			defeated(this.name)
		}
		return this.lifePoints = playerHP;
	}

}
