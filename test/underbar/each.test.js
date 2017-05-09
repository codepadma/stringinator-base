const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const array = [100, 200, 300];
    let count = 0;
    _.each(array, (item, index, array) => {
      expect(array[index]).toBe(item);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      0: 'Charlie',
      1: 9,
      length: 2
    };
    let count = 0;
    _.each(arrayLikeObj, (item, index, iteratedObj) => {
      expect(iteratedObj[index]).toBe(item);
      count += 1;
    });
    expect(count).toBe(2);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    let count = 0;
    const obj = {
      name: 'Charlie',
      age: 9
    };
    _.each(obj, (item, key, iteratedObj) => {
      expect(iteratedObj[key]).toBe(item);
      count += 1;
    });
    expect(count).toBe(2);
  });
});

