import { badMove } from '../messages/player-messages.js';
import HumanPlayer from './human-player.js'

export default class Priest extends HumanPlayer {
	constructor(name, lifePoints, weaponLevel, armorLevel) {
		super(name, lifePoints, weaponLevel, armorLevel);
		this.armorLevel = 1;
		this.spe = 'Mind Control';
		this.ability = 'Large Heal';
		this.specialRequired = 2;
		this.mana = 100;
	}

	specialAttack(enemies) {
		if (this.specialMeter >= this.specialRequired) {
				this.specialMeter -= this.specialRequired;
				return enemies.map(enemy => enemy.attacks(enemy))
			}
		return badMove()
	}

	specialAbility() {
		if (this.mana < 40) {
			return badMove();
		};

		this.mana -= 40;
		return this.lifePoints += 100;
	}
}
