var assert = require('assert'),
    generator = require('..');

describe('generating a 228*150 image', function() {
  it('should return correct name', function() {
    generator(228, 150, function(name){
      assert.equal(name == 'Free_228x150.png');
    });
  });
});
