#!/usr/bin/env node
const parsers = require('./parsers');
const operations = require('./operations');


if (process.argv[2] === '--help') {
    console.log(`you can specify the parser using: 
    --parser=parserName where parserName [flag | simple]`);
    return;
}
const parserType = 'flag';
const parser = parsers[parserType];


const { operation, operands } = parser(process.argv);

const mathematicOperation = operations[operation];
const result = mathematicOperation(...operands);


console.log(result);
