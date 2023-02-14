import gradient from 'gradient-string';
import inquirer from 'inquirer';

export default class GameInputs {
	constructor(player, enemies) {}
	enemiesList = [];
	populateEnemiesList(enemies) {for(let [i, enemy] of enemies.entries()) {enemiesList.push(i)}}

	populateEnemiesList;

	async getPlayerAction(player, enemies) {
		const answers = await inquirer.prompt({
			name: 'action',
			type: 'list',
			message: gradient.cristal('What will you do this turn?'),
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
			this.attackEnemy(enemies);
			break;
		default:
			console.log('Bad move! You lost your turn.')
			break;
		}
	}

	async attackEnemy(enemies) {
		
		const answers = await inquirer.prompt({
			name: 'attack',
			type: 'list',
			message: gradient.cristal('How hard will your journey be ?'),
			choices: this.enemiesList,
		});
	}
}
