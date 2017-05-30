'use strict';

describe('dribbble.version module', function() {
  beforeEach(module('dribbble.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
