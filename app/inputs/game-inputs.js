import inquirer from 'inquirer';
import PlayerMessages, { badMove, whichEnemy } from "../messages/player-messages.js";

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
				'Look for armor',
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
		case 'Look for armor':
			await this.player.searchArmor();
			break;
		case 'Attack an enemy':
			await this.attackEnemy();
			break;
		default:
			badMove();
			break;
		}
	}

	async choseEnemyToAttack() {
		const messages = this.playerMessages.showEnemiesStatus();
		const answers = await inquirer.prompt({
			name: 'attack',
			type: 'list',
			message: whichEnemy(messages),
			choices: this.enemies,
		});
		return answers.attack;
	}

	async attackEnemy() {
		const enemy = await this.choseEnemyToAttack()
		await this.player.attackEnemy(enemy, this.enemies);
	}
	
}
