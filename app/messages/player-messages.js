import gradient from "gradient-string";
import { blankLine } from "./default-messages.js";
import chalk from "chalk";
import { specialDetails } from "./human-player-messages.js";

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
	Current HPs: ${this.player.lifePoints}
	Current armor level: ${this.player.armorLevel}
	Special attack: ${specialDetails(this.player.spe)}. Requires ${this.player.specialRequired} charges to use (current: ${this.player.specialMeter})`
		));

		blankLine();
	}

	showEnemiesStatus() {
		return this.enemies.map(enemy => `
  - ${enemy.name}, weapon level: ${enemy.weaponLevel}, HP: ${enemy.lifePoints}`
		)
	}

}

export function damageTaken(name, damage) {
	console.log(gradient.teen(`${name} takes ${damage} damage`));
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
