#!/usr/bin/env node
import DefaultMessages from "./app/messages/default-messages.js";
import { getSettingsInputs } from "./app/inputs/inputs-index.js";
import { initializeGame } from "./app/game/game-index.js";

console.clear();

const messages = new DefaultMessages;

await messages.welcome()

const inputs = await getSettingsInputs();
const setupGame = await initializeGame(inputs.enemiesNumber, inputs.difficulty, inputs.playerName)

console.log(inputs)
console.log(setupGame)
