import chalk from 'chalk';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import { enemiesNames } from '../players/enemies-names.js';

export default class SettingsInputs {
	constructor(
		playerName,
		difficulty,
		enemiesNumber
		) {
		this.playerName = playerName;
		this.difficulty = difficulty;
		this.enemiesNumber = enemiesNumber;
	}

	async askName() {
		const answers = await inquirer.prompt({
			name: 'player_name',
			type: 'input',
			message: gradient.cristal('What will your player\'s name be?'),
			default() {
				return 'Player'
			},
		});
		return this.playerName = answers.player_name;
	}

	async getDifficulty() {
		const answers = await inquirer.prompt({
			name: 'difficulty',
			type: 'list',
			message: gradient.fruit('How hard will your journey be ?'),
			choices: [
				1,
				2,
				3,
				4
			],
		});
		return this.difficulty = answers.difficulty;
	}

	async getEnemiesNumber() {
		const maxEnemies = enemiesNames.length;
		const answers = await inquirer.prompt({
			name: 'enemiesNumber',
			type: 'number',
			message: chalk.red('How many enemies will you encounter on your journey ?'),
			default() {
				return 4;
			},
		});
		if(answers.enemiesNumber > maxEnemies) {
			return this.enemiesNumber = maxEnemies;
		}
		return this.enemiesNumber = answers.enemiesNumber;
	}
	
}