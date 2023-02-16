import gradient from "gradient-string"

export default class PlayerMessages {
	playerMenu(player, enemies) {
		console.log(gradient.cristal(
	  `What will you do this turn ?
	a - Look for a better weapon
	z - Look for Medkits
	e - Attack enemies on sight`
	))
	}

	showPlayerStatus(player) {
		console.log(gradient.teen(`${player.name}`))
	}

	showEnemiesStatus(enemies) {
		enemies.map(enemy =>
			console.log(gradient.atlas(`${enemy.name}`))
		)
	}
}
