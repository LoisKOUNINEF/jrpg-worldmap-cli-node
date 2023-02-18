import { sleep } from "../../helpers/sleep.js";
import chalkAnimation from 'chalk-animation';

export default class DefaultMessages {

	async welcome() {
	  const rainbowWelcome = chalkAnimation.rainbow(
	    'Welcome to JRPG WorldMap in CLI \n'
	    );
	  await sleep();
	  rainbowWelcome.stop();
	}
}
