const assert = require('assert');
const { isPalindrome, trim } = require('./string-utils');
//const isPalindrome = require('./string-utils');

assert(isPalindrome('gadag'));
assert(isPalindrome('udupi') === false);
