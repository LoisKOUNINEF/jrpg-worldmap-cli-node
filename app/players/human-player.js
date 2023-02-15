import { randomRange } from "../../helpers/random.js";
import Player from "./player.js";

export default class HumanPlayer extends Player {
	constructor(name, difficulty) {
		super (name);
		this.lifePoints = 100 * difficulty;
		this.weaponLevel = 1;
	}

	async searchWeapon(player) {
		const weaponRandom = randomRange(1, 6)
		if (player.weaponLevel > weaponRandom) {
			player.weaponLevel = weaponRandom;
		} else {
			return;
		}
	}

	async searchMedkit(player) {
		const medkit = randomRange(1, 6);
		switch(true) {
		case (medkit === 1):
			break;
		case (medkit > 1 && medkit < 6):
			player.lifePoints += 50;
			break;
		case (medkit === 6):
			player.lifePoints += 100;
			break;
		default:
			break;
		}
	}
}