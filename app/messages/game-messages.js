export default class GameMessages {

	gameOver(player, enemies) {
		if (player.lifePoints > 0) {
			console.log(`You won ${player.name}`)
		} else {
			console.log(`You lost. There are ${enemies.length} left.`)
		}
	}
}
