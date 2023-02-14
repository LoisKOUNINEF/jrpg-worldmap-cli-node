#!/usr/bin/env node
import Inputs from "./app/inputs/settings-inputs.js";
import Messages from "./app/messages/default-messages.js";

console.clear();

const messages = new Messages;
const inputs = new Inputs;
await messages.welcome()
await inputs.askName();
await inputs.getDifficulty();
await inputs.getEnemiesNumber();
