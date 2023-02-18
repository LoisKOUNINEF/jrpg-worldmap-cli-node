import chalk from "chalk";
import { sleep } from '../../helpers/sleep.js'

export default class EnemyActions {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	async attackPlayer() {
		this.enemies.map(async(enemy) => {
			console.log(chalk.red(`\n${enemy.name} attacks !`)), 
			enemy.attacks(this.player)
			await sleep(1000);
		})
	}
}