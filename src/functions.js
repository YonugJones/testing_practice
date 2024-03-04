function capitalize(string) {
    if (!string) return string;

    return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports.capitalize = capitalize;

function reverseString(string) {
    if (!string) return string;

    const stringArray = string.split('');
    const reverseStringArray = [];

    // eslint-disable-next-line no-plusplus
    for (let i = stringArray.length - 1; i >= 0; i--) {
        reverseStringArray.push(stringArray[i]);
    }

    return reverseStringArray.join('');
}
module.exports.reverseString = reverseString;

