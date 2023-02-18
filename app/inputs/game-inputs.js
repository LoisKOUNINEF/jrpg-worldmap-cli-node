import gradient from 'gradient-string';
import inquirer from 'inquirer';
import PlayerMessages from "../messages/player-messages.js";
import chalk from 'chalk';

export default class GameInputs {
	
	constructor(player, enemies,playerMessages) {
		this.player = player;
		this.enemies = enemies;
		this.playerMessages = new PlayerMessages(this.player, this.enemies);
	}

	async getPlayerAction() {
		const answers = await inquirer.prompt({
			name: 'action',
			type: 'list',
			message: this.playerMessages.playerMenu(),
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
			await this.player.searchWeapon();
			break;
		case 'z':
			await this.player.searchMedkit();
			break;
		case 'e':
			await this.choseEnemyToAttack();
			break;
		default:
			console.log(chalk.red('Bad move! You lost your turn.'))
			break;
		}
	}

	enemiesListMessage() {
		return this.playerMessages.showEnemiesStatus()
	}

	async choseEnemyToAttack() {
		const messages = this.playerMessages.showEnemiesStatus();
		const answers = await inquirer.prompt({
			name: 'attack',
			type: 'list',
			message: chalk.red(`Which enemy to attack ? ${messages}`),
			choices: this.enemies,
		});
		const enemy = answers.attack;
		await this.player.attackEnemy(enemy, this.enemies);
	}
}
