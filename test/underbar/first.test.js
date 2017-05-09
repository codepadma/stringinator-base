const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const array = [100, 200, 300];
    expect(_.first(array)).toBe(100);
  });

  it('returns the first 2 elements of an array', () => {
    const array = [100, 200, 300];
    expect(_.first(array, 2)).toEqual([100, 200]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const array = [100, 200, 300];
    expect(_.first(array, 5)).toEqual([100, 200, 300]);
  });
});