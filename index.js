#!/usr/bin/env node
import SettingsInputs from "./app/inputs/settings-inputs.js";
import DefaultMessages from "./app/messages/default-messages.js";

console.clear();

const messages = new DefaultMessages;
const inputs = new SettingsInputs;
await messages.welcome()
await inputs.askName();
await inputs.getDifficulty();
await inputs.getEnemiesNumber();
