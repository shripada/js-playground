const { isPalindrome, trim } = require('./string-utils');

test('gadag is a palindrome', () => {
    expect(isPalindrome('gadag')).toBe(true);
});

test('udupi is not a palindrome', () => {
    const callback = jest.fn();
    expect(isPalindrome('udupi', callback)).toBeFalsy();
    expect(callback).toHaveBeenCalled();
});
