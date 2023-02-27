import { badMove } from '../messages/player-messages.js';
import HumanPlayer from './human-player.js'

export default class Priest extends HumanPlayer {
	constructor(name, lifePoints, weaponLevel, armorLevel) {
		super(name, lifePoints, weaponLevel, armorLevel);
		this.armorLevel = 1;
		this.spe = 'Mind Control';
		this.specialRequired = 2;
	}

	specialAttack(enemies) {
		if (this.specialMeter >= this.specialRequired) {
				this.specialMeter -= this.specialRequired;
				return enemies.map(enemy => enemy.attacks(enemy))
			}
		return badMove()
	}
}
