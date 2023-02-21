import { sleep } from "../helpers/sleep.js";
import chalkAnimation from 'chalk-animation';
import gradient from "gradient-string";
import chalk from "chalk";

export async function welcome() {
	const rainbowWelcome = chalkAnimation.rainbow(
	  'Welcome to JRPG WorldMap in CLI \n'
	);

	await sleep();
	rainbowWelcome.stop();
}

export function blankLine() {
  console.log(' ');
}

export async function enemiesAttackMessage() {
	const attack = chalkAnimation.karaoke(
		'Enemies are about to attack !'
		);

	await sleep(2000)
	attack.stop();
}

export function turnBegins() {
	console.log(gradient.pastel('New turn begins'));
}

export function critHit() {
	console.log(gradient.rainbow(`Crit Hit !`));
}

export function miss() {
	console.log(gradient.cristal('Miss !'));
}

export function requireName() {
	console.log(gradient.cristal('What will your player\'s name be?'));
}

export function requireDifficulty() {
	console.log(gradient.fruit('How hard will your journey be ?'))
}

export function requireEnemiesNumber() {
	console.log(chalk.red('How many enemies will you encounter on your journey ?'))
}
