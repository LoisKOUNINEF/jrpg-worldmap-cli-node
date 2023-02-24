import { badMove } from '../messages/player-messages.js';
import HumanPlayer from './human-player.js'

export default class Priest extends HumanPlayer {
	constructor(name, lifePoints, weaponLevel, armorLevel) {
		super(name, lifePoints, weaponLevel, armorLevel)
		this.spe = 'Mind Control'
	}

	specialAttack(enemies) {
		if (this.specialMeter >= 2) {
				this.specialMeter -= 2;
				return enemies.map(enemy => enemy.attacks(enemy))
			}
		return badMove()
	}
}
