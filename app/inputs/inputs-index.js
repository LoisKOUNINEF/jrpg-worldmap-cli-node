import GameInputs from "./game-inputs.js";
import SettingsInputs from "./settings-inputs.js";
import { setupGame } from "../../index.js";

const gameInputs = new GameInputs();
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
	await gameInputs.getPlayerAction(setupGame.player, setupGame.enemies)
}
