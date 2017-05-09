const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    let nums = [2, 5, 7, 100, 50];
    expect(_.reject(nums, item => item % 2 === 1)).toEqual([2, 100, 50]);
  });

  it('rejects null values from an object', () => {
    const student = {
      name: 'pinky',
      age: 10,
      dlno: null
    };
    expect(_.reject(student, item => item === null)).toEqual(['pinky', 10]);
  });
});