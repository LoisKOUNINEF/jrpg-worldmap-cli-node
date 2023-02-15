#!/usr/bin/env node
import DefaultMessages from "./app/messages/default-messages.js";
import { getSettingsInputs, getGameInputs } from "./app/inputs/inputs-index.js";
import { initializeGame } from "./app/game/game-index.js";

console.clear();

const messages = new DefaultMessages;

await messages.welcome()

const settingsInputs = await getSettingsInputs();
const setupGame = await initializeGame(
	settingsInputs.enemiesNumber, 
	settingsInputs.difficulty, settingsInputs.playerName
	);
const gameInputs = await getGameInputs(
	setupGame.player, 
	setupGame.enemies
	); 
