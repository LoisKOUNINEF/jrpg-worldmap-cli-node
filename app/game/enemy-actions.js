import { randomRange } from '../helpers/random.js';
import { enemiesAttackMessage, blankLine } from '../messages/default-messages.js'
import { badMove, enemyAttacks } from "../messages/player-messages.js";

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
			if(enemy.spe) {
				return this.bossAction(enemy)
			}
			enemyAttacks(enemy.name), 
			enemy.attacks(this.player)
		})
		blankLine();
	}

	async bossAction(boss) {
		const action = randomRange(1,6)
		switch(action) {
		case 1:
		case 2:
		case 3:
		 boss.attacks(this.player)
			break;
		case 4:
			boss.specialAbility()
			break;
		case 5: boss.searchWeapon()
			break;
		case 6: boss.searchArmor()
			break;
		}
	}

}
