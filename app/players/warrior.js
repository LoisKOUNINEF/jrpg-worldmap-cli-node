import { randomRange } from '../helpers/random.js';
import { badMove } from '../messages/player-messages.js';
import HumanPlayer from './human-player.js'

export default class Warrior extends HumanPlayer {
	constructor(name, lifePoints, weaponLevel, difficulty) {
		super(name, lifePoints, weaponLevel, difficulty)
		this.armorLevel = 1;
		this.spe = 'Whirlwind'
	}

	specialAttack(enemies) {
		if (this.specialMeter >= 2) {
				this.specialMeter -= 2;
				this.computeDamage = this.computeSpecialDamage;
				enemies.map(enemy => this.attacks(enemy))
				return this.computeDamage = this.computeDamage;
			}
		return badMove()
	}

	computeSpecialDamage() {
		const randomDamage = randomRange(1,this.difficulty);
		return this.weaponLevel + randomDamage;
	}
}
