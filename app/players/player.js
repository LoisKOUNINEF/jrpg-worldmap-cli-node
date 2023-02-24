import { randomRange } from "../helpers/random.js";
import { critHit, miss } from "../messages/default-messages.js";
import { damageTaken, defeated } from "../messages/player-messages.js";

export default class Player {
	constructor(name, difficulty) {
		this.difficulty = difficulty;
		this.name = name;
		this.lifePoints = randomRange(10, 15) * difficulty;
		this.weaponLevel = randomRange(1, difficulty) + Math.floor(difficulty / 2);
	}

	async attacks(player) {
		const damageTaken = this.computeDamage() * this.weaponLevel;

		player.getsDamaged(damageTaken);
	}

	getsDamaged(damage) {
		const playerHP = this.lifePoints - damage;
		if (damage !== 0){
			damageTaken(this.name, damage);
		};
		if(playerHP <= 0) {
			defeated(this.name)
		}
		return this.lifePoints = playerHP;
	}

	computeDamage() {
		let damage = randomRange(1, 6);

		if (damage === 6){
			critHit();
			return damage * 1.5;
		} else if (damage === 1){
			miss();
			return damage = 0;
		}
		
		return damage;
	}

} 
