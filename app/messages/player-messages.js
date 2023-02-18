import gradient from "gradient-string";
import { blankLine } from "./default-messages.js";

export default class PlayerMessages {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	playerMenu() {
		blankLine();
		console.log(gradient.mind(`Enemies facing you : ${this.showEnemiesStatus()}`))
		blankLine();
		console.log(gradient.teen(
	  `What will you do this turn ?
	Current weapon level: ${this.player.weaponLevel}
	Current HPs: ${this.player.lifePoints}`
		));
	}

	showEnemiesStatus() {
		return this.enemies.map(enemy => `
  - ${enemy.name}, weapon level: ${enemy.weaponLevel}, HP: ${enemy.lifePoints}`
		)
	}

}
