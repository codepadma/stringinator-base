const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str, item => item === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str, item => item === target);
};

const isOnlyDigits = function(str) {
  const digits = str.split('');
  return _.every(digits, 
                 num => !Number.isNaN(parseInt(num)));
};

const filterToOnlyDigits = function(str) {
  const digits = str.split('');
  return (_.filter(digits, num => !Number.isNaN(parseInt(num)))).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, item => truncateString(item, maxLength));
};

const countChars = function(str) {

};

const dedup = function(str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};