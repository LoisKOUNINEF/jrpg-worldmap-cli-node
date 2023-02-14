#!/usr/bin/env node
import Inputs from "./app/inputs.js";
import Messages from "./app/messages.js";

export const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

console.clear();

const messages = new Messages;
const inputs = new Inputs;
await messages.welcome()
await inputs.askName();
await inputs.getDifficulty();
await inputs.getEnemiesNumber();
