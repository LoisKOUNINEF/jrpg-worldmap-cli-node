import gradient from "gradient-string";
import { randomRange } from "../../helpers/random.js";

export default class Player {
	constructor(name, difficulty) {
		this.name = name;
		this.lifePoints = randomRange(10, 15) * difficulty;
		this.weaponLevel = randomRange(1, difficulty) + Math.floor(difficulty / 2);
	}

	async attacks(player) {
		const damageTaken = this.computeDamage() * this.weaponLevel;
		console.log(gradient.teen(`deals ${damageTaken} damage`))
		this.getsDamaged(player, damageTaken);
	}

	getsDamaged(player, damage) {
		const playerHP = player.lifePoints = player.lifePoints - damage;
		if(playerHP <= 0) {
			console.log(gradient.cristal(`${player.name} has been defeated.`))
		}
		return playerHP;
	}

	computeDamage() {
		let damage = randomRange(1, 6)
		if (damage === 6){
			console.log(gradient.rainbow(`Crit Hit !`))
			return damage * 2;
		} else if (damage === 1){
			console.log(gradient.cristal('Miss !'))
			return damage = 0;
		}
		return damage;
	}

} 
