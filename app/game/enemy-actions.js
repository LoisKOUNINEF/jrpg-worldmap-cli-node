import chalk from "chalk";

export default class EnemyActions {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	async attackPlayer() {
		this.enemies.map((enemy) => {
			console.log(chalk.red(`${enemy.name} attacks !`)), 
			enemy.attacks(this.player)
		})
	}
}