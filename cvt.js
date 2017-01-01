#!/usr/bin/env node

'use strict';

/**
 * Require dependencies
 */
const cli = require('commander'),
    pkg = require('./package.json'),
    t2a = require('./lib/t2a'),
    a2t = require('./lib/a2t');

const cvt = (data, options) => {
    if (options.textToAscii) {
        console.log(t2a(data));
    } else if (options.asciiToText) {
        console.log(a2t(data));
    }
};

cli
    .version(pkg.version)
    .arguments('<data>')
    .option('--textToAscii', 'Convert text to ascii')
    .option('--asciiToText', 'Convert ascii to text')
    .action(cvt);

cli.parse(process.argv);

// if program was called with no arguments, show help.
if (cli.args.length === 0) cli.help();