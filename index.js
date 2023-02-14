#!/usr/bin/env node
import DefaultMessages from "./app/messages/default-messages.js";
import { getSettingsInputs, getGameInputs } from "./app/inputs/inputs-index.js";
import { initializeGame } from "./app/game/game-index.js";
import PlayerMessages from "./app/messages/player-messages.js";

console.clear();

const messages = new DefaultMessages;
const playerMessages = new PlayerMessages;

await messages.welcome()

const settingsInputs = await getSettingsInputs();
const setupGame = await initializeGame(settingsInputs.enemiesNumber, settingsInputs.difficulty, settingsInputs.playerName)
const gameInputs = await getGameInputs(settingsInputs.enemiesNumber, settingsInputs.playerName); 

playerMessages.showEnemiesStatus(setupGame.enemies)
playerMessages.attackEnemyMenu(setupGame.enemies)
