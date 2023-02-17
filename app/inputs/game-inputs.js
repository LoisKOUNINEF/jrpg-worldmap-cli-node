import gradient from 'gradient-string';
import inquirer from 'inquirer';
import HumanPlayer from '../players/human-player.js';
import PlayerMessages from "../messages/player-messages.js";
import chalk from 'chalk';

const playerMessages = new PlayerMessages;

export default class GameInputs {
	player;
	constructor(player, enemies) {
		this.player = new HumanPlayer(player);
	}

	async getPlayerAction(player, enemies) {
		const answers = await inquirer.prompt({
			name: 'action',
			type: 'list',
			message: playerMessages.playerMenu(player, enemies),
			choices: [
				'a',
				'z',
				'e',
			],
		});
		return await this.handlePlayerAction(player, enemies, answers.action)
	}

	async handlePlayerAction(player, enemies, action) {
		switch(action) {
		case 'a':
			await this.player.searchWeapon(player);
			break;
		case 'z':
			await this.player.searchMedkit(player);
			break;
		case 'e':
			await this.choseEnemyToAttack(player, enemies);
			break;
		default:
			console.log(chalk.red('Bad move! You lost your turn.'))
			break;
		}
	}

	getEnemiesList(enemies) {
		return enemies.map(enemy => enemy)
	}

	async choseEnemyToAttack(player, enemies) {
		const choices = this.getEnemiesList(enemies)
		const answers = await inquirer.prompt({
			name: 'attack',
			type: 'list',
			message: chalk.red('Which enemy would you like to attack ?'),
			choices: choices,
		});
		const enemy = answers.attack;
		return this.player.attacks(player, enemy, enemies);
	}
}
