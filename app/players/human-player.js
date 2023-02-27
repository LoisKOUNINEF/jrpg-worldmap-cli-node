import { randomRange } from "../helpers/random.js";
import { damageAbsorbed, damageTaken, defeated } from "../messages/player-messages.js";
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
		super (name, difficulty);
		this.lifePoints = 100 * difficulty;
		this.weaponLevel = 1;
		this.armorLevel = 0;
		this.specialMeter = 0;
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
		const headsOrTails = randomRange(1,2);
		const maxArmorLevel = 2 + this.difficulty;
			
		const armor = randomRange(1,maxArmorLevel);

		if (headsOrTails === 1 || armor < this.armorLevel) {
			return nothingFound();
		}

		armorFound(armor);
		return this.armorLevel = armor;
	}

	getsDamaged(damage) {
		const damageMitigated = this.mitigateDamage(damage);

		const playerHP = this.lifePoints - damageMitigated;

		if (damageMitigated !== 0){
			damageTaken(this.name, damageMitigated);
		};
		if(playerHP <= 0) {
			defeated(this.name);
		}
		return this.lifePoints = playerHP;
	}

	mitigateDamage(damage) {
		let mitigateDamage = damage - this.armorLevel;
		if (mitigateDamage < 0) {
			damageAbsorbed(this.name, damage)
			return mitigateDamage = 0; 
		};
		return mitigateDamage;
	}

}
