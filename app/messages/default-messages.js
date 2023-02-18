import { sleep } from "../../helpers/sleep.js";
import chalkAnimation from 'chalk-animation';

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
