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
				'Attack an enemy',
				'Look for a better weapon',
				'Look for health',
				'Look for armor',
				`Use special (${this.player.spe})`
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
		case `Use special (${this.player.spe})`:
			if(this.player.spe === 'Backstab') {
				await this.specialAttackEnemy();
				break;
			}
			await this.player.specialAttack(this.enemies);
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

	async specialAttackEnemy() {
		const enemy = await this.choseEnemyToAttack()
		await this.player.specialAttack(enemy, this.enemies);
	}
	
}
