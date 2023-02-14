import { randomRange } from "../../helpers/random.js";
import Player from "./player.js";

export default class HumanPlayer extends Player {
	constructor(name, difficulty) {
		super (name);
		this.lifePoints = 100 * difficulty;
		this.weaponLevel = 1;
	}

	async searchWeapon() {
		const weaponRandom = randomRange(1, 6)
		if (this.weaponLevel > weaponRandom) {
			this.weaponLevel = weaponRandom;
		} else {
			return;
		}
	}

	async searchMedkit() {
		const medkit = randomRange(1, 6);
		switch(medkit) {
		case 1:
			break;
		case 1<medkit<6:
			this.lifePoints += 50;
			console.log(this.lifePoints)
			break;
		case 6:
			console.log(this.lifePoints)
			this.lifePoints += 100;
			break;
		default:
			break;
		}
	}
}