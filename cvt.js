#!/usr/bin/env node

'use strict';

/**
 * Require dependencies
 */
const cli = require('commander'),
    pkg = require('./package.json'),
    t2a = require('./lib/t2a'),
    a2t = require('./lib/a2t'),
    t2h = require('./lib/t2h'),
    h2t = require('./lib/h2t'),
    t2b = require('./lib/t2b'),
    b2t = require('./lib/b2t');

const cvt = (data, options) => {
    if (options.textToAscii) {
        console.log('🔢 : ', t2a(data));
    } else if (options.asciiToText) {
        console.log('🔡 : ', a2t(data));
    } else if (options.textToHex) {
        console.log('🔢 : ', t2h(data));
    } else if (options.hexToText) {
        console.log('🔡 : ', h2t(data));
    } else if (options.textToBinary) {
        console.log('🔢 : ', t2b(data));
    } else if (options.binaryToText) {
        console.log('🔡 : ', b2t(data));
    }
};

cli
    .version(pkg.version)
    .arguments('<data>')
    .option('--textToAscii', 'Convert text to ascii')
    .option('--asciiToText', 'Convert ascii to text')
    .option('--textToHex', 'Convert text to hex')
    .option('--hexToText', 'Convert hex to text')
    .option('--textToBinary', 'Convert text to binary')
    .option('--binaryToText', 'Convert binary to text')
    .action(cvt);

cli.parse(process.argv);

// if program was called with no arguments, show help.
if (cli.args.length === 0) cli.help();