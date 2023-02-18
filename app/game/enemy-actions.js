import chalk from "chalk";
import { enemiesAttackMessage, blankLine } from '../messages/default-messages.js'

export default class EnemyActions {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	async attackPlayer() {
		await enemiesAttackMessage();
		this.enemies.map((enemy) => {
			console.log(chalk.red(`\n${enemy.name} attacks !`)), 
			enemy.attacks(this.player)
		})
		blankLine();
	}

}
