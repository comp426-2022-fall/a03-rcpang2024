#!usr/bin/env node

import { roll } from "../lib/roll.js";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const sides = args.sides && args.sides > 0 ? args.sides: 6;
const dice = args.dice && args.dice > 0 ? args.dice: 2;
const rolls = args.rolls && args.rolls > 0 ? args.rolls: 1;
console.log(JSON.stringify(roll(sides, dice, rolls)));
process.exit(0);
