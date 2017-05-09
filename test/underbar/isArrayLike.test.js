const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.isArrayLike(array)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      '0': 'Charlie',
      '1': 9,
      length: 2
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'name': 'Charlie',
      'age': 9
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });
});
