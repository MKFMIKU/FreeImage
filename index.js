const Jimp = require("jimp");

/**
 * Creates a random image
 */
module.exports = function(width, height, cb) {
    let image = new Jimp(width, height, 0xffffffff);
    let name = 'Free_' + width + 'x' + height + '.png';
    let tag = width + ' x ' + height;
    let fontSize = 32;
    Jimp.loadFont( './font/open-sans-32-black.fnt' ).then(function (font) { // load font from .fnt file
        image.print(font, width/2-tag.length*fontSize/4, height/2-fontSize/4, tag);
        image.write(name);
        cb(name);
    });
};
