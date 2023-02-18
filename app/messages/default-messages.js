import { sleep } from "../../helpers/sleep.js";
import chalkAnimation from 'chalk-animation';
import gradient from "gradient-string";

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
