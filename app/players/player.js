import { randomRange } from "../../helpers/random.js";

export default class Player {
	name;
	lifePoints;
	weaponLevel;

	constructor(name, difficulty) {
		this.name = name;
		this.lifePoints = randomRange(10, 15) * difficulty;
		this.weaponLevel = randomRange(1, difficulty) + Math.floor(difficulty / 2);
	}

	async attacks(player, enemyName, enemies) {
		const enemy = await this.findEnemyByName(enemyName, enemies)
		const damageTaken = this.computeDamage() * player.weaponLevel;
		this.getsDamaged(enemy, damageTaken);
	}

	getsDamaged(enemy, damage) {
		const enemyHP = enemy.lifePoints = enemy.lifePoints - damage;
		if(enemy.lifePoints <= 0) {
			return
		} 
		return enemyHP;
	}

	computeDamage() {
		return randomRange(1, 6)
	}

	findEnemyByName(name, enemies) {
		const enemy = enemies.find(enemy => {
			return enemy.name === name
		});
		return enemy;
	}
} 
