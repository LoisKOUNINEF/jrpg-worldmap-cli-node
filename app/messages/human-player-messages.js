import gradient from "gradient-string";
import { blankLine } from "./default-messages.js";

export function nothingFound() {
	blankLine();
	console.log(
		gradient.cristal(`No luck, you didn't find anything.`)
	)
	blankLine();
}

export function regularHealthPack() {
	blankLine();
	console.log(
		gradient.morning(`You found a regular medkit. You gain 50 HP.`)
	)
	blankLine();
}

export function largeHealthPack() {
	blankLine();
	console.log(
		gradient.morning(`You found a large medkit. You gain 100 HP.`)
	)
	blankLine();	
}

export function betterWeapon(weaponRandom) {
	blankLine();
	console.log(
		gradient.morning(`You found a level ${weaponRandom} weapon. Nice!`)
	)
	blankLine();
}
