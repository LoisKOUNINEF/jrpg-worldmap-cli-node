import inquirer from 'inquirer';
import { requireDifficulty, requireEnemiesNumber, requireName, requireClass } from '../messages/default-messages.js';
import { enemiesNames } from '../players/enemies-names.js';

export default class SettingsInputs {
	constructor(
		playerName,
		playerClass,
		difficulty,
		enemiesNumber
		) {
		this.playerName = playerName;
		this.playerClass = playerClass;
		this.difficulty = difficulty;
		this.enemiesNumber = enemiesNumber;
	}

	async askName() {
		const answers = await inquirer.prompt({
			name: 'player_name',
			type: 'input',
			message: requireName(),
			default() {
				return 'Player'
			},
		});
		return this.playerName = answers.player_name;
	}

	async askClass() {
		const answers = await inquirer.prompt({
			name: 'player_class',
			type: 'list',
			message: requireClass(),
			choices: [
				'Warrior',
				'Monk'
			],
		});
		return this.playerClass = answers.player_class;
	}


	async getDifficulty() {
		const answers = await inquirer.prompt({
			name: 'difficulty',
			type: 'list',
			message: requireDifficulty(),
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
			message: requireEnemiesNumber(),
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