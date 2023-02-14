#!/usr/bin/env node
import SettingsInputs from "./app/inputs/settings-inputs.js";
import DefaultMessages from "./app/messages/default-messages.js";
import Game from "./app/game/game.js";
import HumanPlayer from "./app/players/human-player.js";

console.clear();

const messages = new DefaultMessages;
const inputs = new SettingsInputs;
const game = new Game;

await messages.welcome()
await inputs.askName();
await inputs.getDifficulty();
await inputs.getEnemiesNumber();

await game.initializeEnemies(inputs.enemiesNumber, inputs.difficulty)
await game.initializePlayer(inputs.playerName, inputs.difficulty)
