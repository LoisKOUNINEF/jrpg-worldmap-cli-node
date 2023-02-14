#!/usr/bin/env node
import SettingsInputs from "./app/inputs/settings-inputs.js";
import DefaultMessages from "./app/messages/default-messages.js";
import Game from "./app/game.js";

console.clear();

const messages = new DefaultMessages;
const inputs = new SettingsInputs;
await messages.welcome()
await inputs.askName();
await inputs.getDifficulty();
await inputs.getEnemiesNumber();

const game = new Game();
await game.initializeEnemies(inputs.enemiesNumber, inputs.difficulty)

// console.log(game.enemies)
