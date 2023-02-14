import Player from "./player.js";

export default class HumanPLayer extends Player {
	constructor() {
		this.lifePoints = 100 * difficulty;
	}

	searchWeapon() {
		const weaponRandom = randomRange(1, 6)
		if (this.weaponLevel > weaponRandom) {
			this.weaponLevel = weaponRandom;
		} else {
			return;
		}
	}

	searchMedkit() {
		const medkit = randomRange(1, 6);
		switch(medkit) {
		case 1:
			break;
		case 1<medkit<6:
			this.lifePoints += 50;
			break;
		case 6:
			this.lifePoints += 100;
			break;
		default:
			break;
		}
	}
}