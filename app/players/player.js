import Messages from "../messages/default-messages.js";
import { randomRange } from "../../helpers/random.js";

export default class Player {
	name;
	lifePoints;
	weaponLevel;

	constructor(name, difficulty, message) {
		this.name = name;
		this.lifePoints = randomRange(10, 15) * difficulty;
		this.weaponLevel = randomRange(1, (difficulty + 1)) + (difficulty / 2);
		this.message = new Messages();
	}

	attacks(player) {
		damageTaken = this.computeDamage() * this.weaponLevel;
		player.getsDamaged(damageTaken);
	}

	getsDamaged(damage) {
		this.lifePoints = this.lifePoints - damage;
		if(this.lifePoints <= 0) {
			this.message.welcome()
		} 
	}

	computeDamage() {
		randomRange(1, 6)
	}
} 
