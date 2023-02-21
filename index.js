#!/usr/bin/env node
import { welcome } from "./app/messages/default-messages.js";
import { getSettingsInputs } from "./app/inputs/inputs-index.js";
import { getGameLoop, getInitializeGame } from "./app/game/game-index.js";

console.clear();

await welcome();

export const settingsInputs = await getSettingsInputs();

export const initializeGame = await getInitializeGame();

await getGameLoop(); 
