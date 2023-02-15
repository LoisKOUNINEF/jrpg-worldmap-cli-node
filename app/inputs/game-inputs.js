import gradient from 'gradient-string';
import inquirer from 'inquirer';
import HumanPlayer from '../players/human-player.js';

export default class GameInputs {
	constructor(player, enemies) {
		player = new HumanPlayer();
	}

	async getPlayerAction(player, enemies) {
		const answers = await inquirer.prompt({
			name: 'action',
			type: 'list',
			message: gradient.cristal(`What will you do this turn? ${enemies}`),
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
			player.searchWeapon();
			break;
		case 'z':
			player.searchMedkit();
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
