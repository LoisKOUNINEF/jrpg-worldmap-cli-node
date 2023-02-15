import gradient from 'gradient-string';
import inquirer from 'inquirer';
import HumanPlayer from '../players/human-player.js';
import PlayerMessages from "../messages/player-messages.js";

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
			await this.player.searchWeapon();
			break;
		case 'z':
			await this.player.searchMedkit();
			break;
		case 'e':
			await this.attackEnemy(enemies);
			break;
		default:
			console.log('Bad move! You lost your turn.')
			break;
		}
	}

	getEnemiesList(enemies) {
		const enemiesListIndex = [];
		for(let enemy of enemies) {
			enemiesListIndex.push(enemy)
		}
		const enemiesOptionDisplay = enemiesListIndex
			.map((enemy, index) => 
				`${index} ${enemy.name} ${enemy.weaponLevel}`
			)
		return enemiesOptionDisplay
	}

	async attackEnemy(enemies) {
		const choices = this.getEnemiesList(enemies)
		const answers = await inquirer.prompt({
			name: 'attack',
			type: 'list',
			message: gradient.cristal('Which enemy would you like to attack ?'),
			choices: choices,
		});
	}
}
