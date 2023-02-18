import gradient from "gradient-string"

export default class PlayerMessages {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	playerMenu() {
		console.log(gradient.teen(
	  `What will you do this turn ?
	a - Look for a better weapon (current lvl: ${this.player.weaponLevel})
	z - Look for Medkits (current HPs: ${this.player.lifePoints})
	e - Attack enemies on sight`
	))
	}

	showEnemiesStatus() {
		return this.enemies.map(enemy => `
  - ${enemy.name}, weapon level: ${enemy.weaponLevel}, HP: ${enemy.lifePoints}`
		)
	}

}
