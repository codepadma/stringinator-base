const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const array= [200, 300, 400];
    expect(_.contains(array, 300)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const array= [200, 300, 400];
    expect(_.contains(array, 500)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const butterflies = {
      butterfly1: 'monarch',
      butterfly2: 'crescentspot',
      butterfly3: 'aphrodite', 
      butterfly4: 'viceroy'
    };
    expect(_.contains(butterflies, 'monarch')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const butterflies = {
      butterfly1: 'monarch',
      butterfly2: 'crescentspot',
      butterfly3: 'aphrodite', 
      butterfly4: 'viceroy'
    };
    expect(_.contains(butterflies, 'isabella')).toBe(false);
  });

});