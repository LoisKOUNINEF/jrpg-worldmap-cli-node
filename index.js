#!/usr/bin/env node
import DefaultMessages from "./app/messages/default-messages.js";
import { getSettingsInputs, getGameInputs } from "./app/inputs/inputs-index.js";
import { initializeGame } from "./app/game/game-index.js";

console.clear();

const messages = new DefaultMessages;

await messages.welcome()

export const settingsInputs = await getSettingsInputs();

export const setupGame = await initializeGame();

export const gameInputs = await getGameInputs(); 
