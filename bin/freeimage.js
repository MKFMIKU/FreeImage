#!/usr/bin/env node
var generator = require('..');

var argv = require('yargs')
    .usage('Usage: $0 [width] [height]')
    .demand(2)
    .argv;

var width = argv._[0],
    height = argv._[1],
    name = generator(width, height, done);

function done(err) {
    if (err) console.log(err);
    else console.log('Generator: ' + name);
}
