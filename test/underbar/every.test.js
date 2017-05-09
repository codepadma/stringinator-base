const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [23, 15, 67, 99, 101];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      it('will return true if no callback is supplied', () => {
      const nums = [23, 15, 67, 99, 101];
      expect(_.every(nums, item => item % 2 === 1)).toBe(true);
    });
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [22, 15, 67, 99, 101];
      expect(_.every(nums, item => item % 2 === 1)).toBe(false);
    });

  });
});