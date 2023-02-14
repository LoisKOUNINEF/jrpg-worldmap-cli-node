import { sleep } from "../index.js";
import chalk from "chalk";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";

export default class Messages {

	async welcome() {
	  const rainbowWelcome = chalkAnimation.rainbow(
	    'Welcome to JRPG WorldMap in CLI \n'
	    );
	  await sleep();
	  rainbowWelcome.stop();
	}
}