import { randomRange } from '../helpers/random.js';
import { badMove } from '../messages/player-messages.js';
import HumanPlayer from './human-player.js'

export default class Warrior extends HumanPlayer {
	constructor(name, lifePoints, weaponLevel, difficulty) {
		super(name, lifePoints, weaponLevel, difficulty);
		this.armorLevel = 3;
		this.spe = 'Whirlwind';
		this.ability = 'Forge'
		this.specialRequired = 2;
	}

	specialAttack(enemies) {
		if (this.specialMeter >= this.specialRequired) {
				this.specialMeter -= this.specialRequired;
				this.computeDamage = this.computeSpecialDamage;
				enemies.map(enemy => this.attacks(enemy))
				return this.computeDamage = this.computeDamage;
			}
		return badMove()
	}

	specialAbility() {
		this.armorLevel += 1;
		this.specialMeter += 1;
	}

	computeSpecialDamage() {
		const randomDamage = randomRange(1,this.difficulty);
		const damage = this.weaponLevel + randomDamage;
		return damage;
	}
}
