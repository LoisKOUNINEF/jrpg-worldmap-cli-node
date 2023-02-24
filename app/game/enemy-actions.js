import { enemiesAttackMessage, blankLine } from '../messages/default-messages.js'
import { enemyAttacks } from "../messages/player-messages.js";

export default class EnemyActions {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	async attackPlayer() {
		if(this.enemies.length === 0 || this.player.lifePoints <= 0) {
			return;
		}
		
		await enemiesAttackMessage();
		this.enemies.map((enemy) => {
			enemyAttacks(enemy.name), 
			enemy.attacks(this.player)
		})
		blankLine();
	}

}
