import GameInputs from "./game-inputs.js";
import SettingsInputs from "./settings-inputs.js";
import { initializeGame } from "../../index.js";

const settingsInputs = new SettingsInputs();

export async function getSettingsInputs() {
	const data = {
		playerName: await settingsInputs.askName(),
		difficulty: await settingsInputs.getDifficulty(),
	  enemiesNumber: await settingsInputs.getEnemiesNumber(),
	}
  return data;
}

export async function getGameInputs() {
	const gameInputs = new GameInputs(
		initializeGame.player, 
		initializeGame.enemies
	);
	await gameInputs.getPlayerAction()
}
