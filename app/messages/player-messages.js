export default class PlayerMessages {
	playerMenu(player, enemies) {
		console.log(`What will you do this turn ?
		a - Look for a better weapon;'
		z - Look for Medkits;'
		e - Attack enemies on sight.`)
	}

	showPlayerStatus(player) {
		console.log(`${player.name}`)
	}

	showEnemiesStatus(enemies) {
		enemies.map(enemy =>
			console.log(`${enemy.name}`))
	}
}
