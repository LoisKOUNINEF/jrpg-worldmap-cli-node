import gradient from "gradient-string"

export default class GameMessages {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	gameOver(player, enemies) {
		if (player.lifePoints > 0) {
			console.log(gradient.passion(`You won ${player.name}`))
		} else {
			console.log(gradient.summer(`You lost. There are ${enemies.length} left.`))
		}
	}
}
