import gradient from "gradient-string"

export default class PlayerMessages {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	playerMenu() {
		console.log(gradient.cristal(
	  `What will you do this turn ?
	a - Look for a better weapon (current lvl: ${this.player.weaponLevel})
	z - Look for Medkits (current HPs: ${this.player.lifePoints})
	e - Attack enemies on sight`
	))
	}

	showPlayerStatus() {
		console.log(gradient.teen(`${this.player.name}`))
	}

	showEnemiesStatus() {
		this.enemies.map(enemy =>
			console.log(gradient.atlas(`${enemy.name}`))
		)
	}
	
}
