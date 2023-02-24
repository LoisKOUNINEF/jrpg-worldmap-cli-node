import { randomRange } from '../helpers/random.js';
import HumanPlayer from './human-player.js'

export default class Warrior extends HumanPlayer {
	constructor(name, lifePoints, weaponLevel, difficulty) {
		super(name, lifePoints, weaponLevel, difficulty)
		this.armorLevel = 1;
		this.spe = 'Whirlwind'
	}

	specialAttack(enemies) {
		this.computeDamage = this.computeSpecialDamage;
		enemies.map(enemy => this.attacks(enemy))
		return this.computeDamage = this.computeDamage;
	}

	computeSpecialDamage() {
		console.log('special')
		const randomDamage = randomRange(1,this.difficulty);
		return this.weaponLevel + randomDamage;
	}
}
