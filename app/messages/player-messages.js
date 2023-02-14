export default class PlayerMessages {
	playerMenu(player, enemies) {
		console.log()
	}

	attackEnemyMenu(enemies) {
		for(let [i, enemy] of enemies.entries()) {
			console.log(`${i+1} - Attack ${enemy.name} which wields a level ${enemy.weaponLevel} weapon.`)
		}
	}

	showPlayerStatus(player) {
		console.log(`${player.name}`)
	}

	showEnemiesStatus(enemies) {
		enemies.map(enemy =>
			console.log(`${enemy.name}`))
	}
}
