const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.reduce(array, (accumulator, item) => accumulator + item, 0)).toBe(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.reduce(array, (accumulator, item) => accumulator + item)).toBe(15);
  });

});