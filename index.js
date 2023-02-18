#!/usr/bin/env node
import DefaultMessages from "./app/messages/default-messages.js";
import { getSettingsInputs } from "./app/inputs/inputs-index.js";
import { getGameLoop, getInitializeGame } from "./app/game/game-index.js";

console.clear();

const messages = new DefaultMessages;

await messages.welcome()

export const settingsInputs = await getSettingsInputs();

export const initializeGame = await getInitializeGame();

const gameLoop = await getGameLoop(); 
