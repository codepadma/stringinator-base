const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const arrayOfObjs = [{name: 'Leah', age: 10},
                   {name: 'Zia', age: 16},
                   {name: 'Tink', age: 16}];
    expect(_.pluck(arrayOfObjs, 'age')).toEqual([10, 16, 16]);
  });

});