import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string"

export default class GameMessages {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	gameOver(activeEnemies) {
		if (this.player.lifePoints > 0) {
			this.winner();
		} else {
			this.loser(activeEnemies);
		}
	}

	loser(activeEnemies) {
		const enemiesLeft = this.enemies.length + activeEnemies.length;
		console.log(
			gradient.summer(`You lost. There are ${enemiesLeft} enemies left.`)
		);
		process.exit(0);
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
