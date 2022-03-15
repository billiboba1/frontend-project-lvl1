#!/usr/bin/env node

import greating from '../src/cli.js';


console.log('Welcome to the Brain Games!');
const name = greating();
console.log(`Hello, ${name}`);
