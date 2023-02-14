#!/usr/bin/env node
import DefaultMessages from "./app/messages/default-messages.js";
import { getSettingsInputs } from "./app/inputs/inputs-index.js";
import { initializeGame } from "./app/game/game-index.js";
import PlayerMessages from "./app/messages/player-messages.js";

console.clear();

const messages = new DefaultMessages;
const playerMessages = new PlayerMessages;

await messages.welcome()

const inputs = await getSettingsInputs();
const setupGame = await initializeGame(inputs.enemiesNumber, inputs.difficulty, inputs.playerName)

playerMessages.showEnemiesStatus(setupGame.enemies)
playerMessages.attackEnemyMenu(setupGame.enemies)