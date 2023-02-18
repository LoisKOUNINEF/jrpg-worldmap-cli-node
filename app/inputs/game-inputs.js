import inquirer from 'inquirer';
import PlayerMessages from "../messages/player-messages.js";
import chalk from 'chalk';

export default class GameInputs {
	
	constructor(player, enemies) {
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
				'Look for a better weapon',
				'Look for health',
				'Attack an enemy',
			],
		});
		return await this.handlePlayerAction(answers.action)
	}

	async handlePlayerAction(action) {
		switch(action) {
		case 'Look for a better weapon':
			await this.player.searchWeapon();
			break;
		case 'Look for health':
			await this.player.searchMedkit();
			break;
		case 'Attack an enemy':
			await this.choseEnemyToAttack();
			break;
		default:
			console.log(chalk.red('Bad move! You lost your turn.'))
			break;
		}
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
