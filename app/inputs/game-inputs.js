import gradient from 'gradient-string';
import inquirer from 'inquirer';
import HumanPlayer from '../players/human-player.js';
import PlayerMessages from "../messages/player-messages.js";
import chalk from 'chalk';

const playerMessages = new PlayerMessages;

export default class GameInputs {
	player;
	enemies = []
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	async getPlayerAction() {
		console.log(this.player)
		console.log(this.enemies)
		const answers = await inquirer.prompt({
			name: 'action',
			type: 'list',
			message: playerMessages.playerMenu(this.player, this.enemies),
			choices: [
				'a',
				'z',
				'e',
			],
		});
		return await this.handlePlayerAction(answers.action)
	}

	async handlePlayerAction(action) {
		switch(action) {
		case 'a':
			await this.player.searchWeapon(this.player);
			break;
		case 'z':
			await this.player.searchMedkit(this.player);
			break;
		case 'e':
			await this.choseEnemyToAttack(this.player, this.enemies);
			break;
		default:
			console.log(chalk.red('Bad move! You lost your turn.'))
			break;
		}
	}

	mapEnemies() {
		return this.enemies.map(enemy => enemy)
	}

	enemiesListMessage() {
		return this.enemies.map(enemy => `
  - ${enemy.name}, weapon level: ${enemy.weaponLevel}, HP: ${enemy.lifePoints}`
		)
	}

	async choseEnemyToAttack() {
		const choices = this.enemies
		const messages = this.enemiesListMessage();
		const answers = await inquirer.prompt({
			name: 'attack',
			type: 'list',
			message: chalk.red(`Which enemy to attack ? ${messages}`),
			choices: choices,
		});
		const enemy = answers.attack;
		return this.player.attacks(this.player, enemy, this.enemies);
	}
}
