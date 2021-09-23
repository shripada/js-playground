function isPalindrome(string, callback = () => {}) {
    callback(string);
    return string === string.split('').reverse().join('');
}

function trim(string) {
    return string.trim();
}

// module.exports = {
//     isPalindrome,
//     trim
// };

// module.exports = isPalindrome;
module.exports.isPalindrome = isPalindrome;
module.exports.trim = trim;
