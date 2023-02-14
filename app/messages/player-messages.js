export default class PlayerMessages {
	playerMenu(player, enemies) {
		console.log('What will you do this turn ?')
		console.log('a - Look for a better weapon;')
		console.log('z - Look for Medkits;')
		console.log('e - Attack enemies on sight.')
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
