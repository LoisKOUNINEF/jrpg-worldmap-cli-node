import SettingsInputs from "./settings-inputs.js";

const settingsInputs = new SettingsInputs();

export async function getSettingsInputs() {
	const data = {
		playerName: await settingsInputs.askName(),
		playerClass: await settingsInputs.askClass(),
		difficulty: await settingsInputs.getDifficulty(),
	  enemiesNumber: await settingsInputs.getEnemiesNumber(),
	}
  return data;
}
