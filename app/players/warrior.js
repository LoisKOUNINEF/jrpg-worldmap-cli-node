import HumanPlayer from './human-player.js'

export default class Warrior extends HumanPlayer {
	constructor(name, lifePoints, weaponLevel) {
		super(name, lifePoints, weaponLevel)
		this.armorLevel = 1;
	}

	whirlwind() {

	}
}
