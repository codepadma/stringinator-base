const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const array = ['toyota', 'volvo', 'honda', 'mercedes'];
    expect(_.indexOf(array, 'toyota')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const array = ['toyota', 'volvo', 'honda', 'mercedes'];
    expect(_.indexOf(array, 'mercedes')).toBe(3);
  });

  it('returns -1 for a missing value', () => {
    const array = ['toyota', 'volvo', 'honda', 'mercedes'];
    expect(_.indexOf(array, 'ford')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const array = ['toyota', 'volvo', 'honda', 'mercedes', 'volvo'];
    expect(_.indexOf(array, 'volvo')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const array = ['toyota', 'volvo', 'honda', 'mercedes', 'volvo'];
    expect(_.indexOf(array, 'volvo', 2)).toBe(4);
  });

});