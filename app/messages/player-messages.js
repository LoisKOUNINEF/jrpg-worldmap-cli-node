import gradient from "gradient-string";
import { blankLine } from "./default-messages.js";
import chalk from "chalk";

export default class PlayerMessages {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	playerMenu() {
		blankLine();
		console.log(
			gradient.mind(`Enemies facing you : ${this.showEnemiesStatus()}`)
		)
		blankLine();
		
		console.log(gradient.teen(
	  `What will you do this turn ?
	Current weapon level: ${this.player.weaponLevel}
	Current HPs: ${this.player.lifePoints}`
		));

		blankLine();
	}

	showEnemiesStatus() {
		return this.enemies.map(enemy => `
  - ${enemy.name}, weapon level: ${enemy.weaponLevel}, HP: ${enemy.lifePoints}`
		)
	}

}

export function damageDealt(damageTaken) {
	console.log(gradient.teen(`deals ${damageTaken} damage`));
}

export function defeated(playerName) {			
	console.log(gradient.cristal(`${playerName} has been defeated.`))
}

export function badMove() {			
	console.log(chalk.red('Bad move! You lost your turn.'));
}

export function whichEnemy(messages) { 
	console.log(chalk.red(`Which enemy to attack ? ${messages}`));
}

export function enemyAttacks(enemyName) {
	console.log(chalk.red(`\n${enemyName} attacks !`));
}
