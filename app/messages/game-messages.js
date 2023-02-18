import gradient from "gradient-string"

export default class GameMessages {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	gameOver() {
		if (this.player.lifePoints > 0) {
			console.log(gradient.passion(`You won ${this.player.name}`))
		} else {
			console.log(gradient.summer(`You lost. There are ${this.enemies.length} left.`))
		}
	}
}
