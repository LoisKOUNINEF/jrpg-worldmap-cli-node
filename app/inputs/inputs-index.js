import PlayerMessages from "../messages/player-messages.js";
import GameInputs from "./game-inputs.js";
import SettingsInputs from "./settings-inputs.js";

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

export async function getGameInputs(player, enemies) {
	PlayerMessages.playerMenu;
	await gameInputs.getPlayerAction(player, enemies)
}