#!usr/bin/env node

import { roll } from "../lib/roll.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
var sides = args.sides || 6;
var dice = args.dice || 2;
var rolls = args.rolls || 1;
console.log(JSON.stringify(roll(args.sides, args.dice, args.rolls));
