#!/usr/bin/env node
var generator = require('..');

var argv = require('yargs')
    .usage('Usage: $0 [width] [height]')
    .demand(2)
    .argv;

var width = argv._[0],
    height = argv._[1],
    file = argv._[2];

function done(err, name) {
    if (err) console.log(err);
    else console.log('Generator: ' + name);
}

generator(width, height, file, done);
