import { badMove } from '../messages/player-messages.js';
import HumanPlayer from './human-player.js'

export default class Rogue extends HumanPlayer {
	constructor(name, lifePoints, weaponLevel, armorLevel) {
		super(name, lifePoints, weaponLevel, armorLevel);
		this.armorLevel = 2;
		this.weaponLevel = 2;
		this.spe = 'Backstab';
		this.ability = 'Sharpened Blade';
		this.specialRequired = 1;
	}

	specialAttack(enemy, enemies) {
		if (this.specialMeter >= this.specialRequired) {
				this.specialMeter -= this.specialRequired;
				this.computeDamage = this.computeSpecialDamage;
				this.attackEnemy(enemy, enemies);
				return this.computeDamage = this.computeDamage;
			}
		return badMove()
	}

	specialAbility() {
		this.weaponLevel += 1;
		this.specialMeter += 1;
	}

	computeSpecialDamage() {
		const damage = 9 * this.weaponLevel;
		return damage;
	}

}