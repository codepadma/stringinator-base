const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [200, 400, 600, 400, 1000];
    expect(_.uniq(nums)).toEqual([200, 400, 600, 1000]);;
  });
});