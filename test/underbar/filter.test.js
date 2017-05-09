const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [200, 405, 300, 515];
    expect(_.filter(nums, item => item % 2 === 1 )).toEqual([405, 515]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {name: 'Bob', age: 30};
    expect(_.filter(obj, item => typeof(item) === 'number')).toEqual([30]);
  });
});