const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const array = [100, 200, 300];
    expect(_.last(array)).toBe(300);
  });

  it('returns the last 2 elements of an array', () => {
    const array = [100, 200, 300];
    expect(_.last(array, 2)).toEqual([200, 300]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const array = [100, 200 ,300];
    expect(_.last(array, 5)).toEqual([100, 200, 300]);
  });
});