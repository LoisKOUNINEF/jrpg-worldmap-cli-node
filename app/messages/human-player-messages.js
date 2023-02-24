import gradient from "gradient-string";
import { blankLine } from "./default-messages.js";

export function nothingFound() {
	blankLine();
	console.log(
		gradient.cristal(`No luck, you didn't find anything.`)
	)
	blankLine();
}

export function regularMedkit() {
	blankLine();
	console.log(
		gradient.morning(`You found a regular medkit. You gain 50 HP.`)
	)
	blankLine();
}

export function largeMedkit() {
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

export function enemyTargeted(playerName, enemyName) {
	console.log(gradient.cristal(`${playerName} attacks ${enemyName}!`))
}

export function armorFound(armor) {
	blankLine();
	console.log(
		gradient.morning(`You found a level ${armor} armor. Nice!`)
	)
	blankLine();
}

export function specialDetails(spe) {
	if (spe === 'Whirlwind') {
		return `${spe}: deals weapon level based damage to all enemies in range.`
	}
	if (spe === 'Deflect') {}
}
