import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string"

export default class GameMessages {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	gameOver() {
		if (this.player.lifePoints > 0) {
			this.winner();
		} else {
			console.log(gradient.summer(`You lost. There are ${this.enemies.length} enemies left.`))
		}
	}

	winner() {
	  console.clear();
	  figlet(`Congrats ${this.player.name}!\n`, (err, data) => {
	    console.log(gradient.pastel.multiline(data) + '\n');

	    console.log(
	      chalk.green(
	        `Who needs graphics to enjoy such an amazing game ?`
	      )
	    );
	    process.exit(0);
	  });
	}
}
