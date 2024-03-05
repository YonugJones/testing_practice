function capitalize(string) {
    if (!string) return string;

    return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports.capitalize = capitalize;

function reverseString(string) {
    if (!string) return string;

    const stringArray = string.split('');
    const reverseStringArray = [];

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reverseStringArray.push(stringArray[i]);
    }

    return reverseStringArray.join('');
}
module.exports.reverseString = reverseString;

class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }
}
module.exports.Calculator = Calculator;

function caesarCipher(string, number) {
    if (typeof string !== 'string' || typeof number !== 'number') return null;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');

    const cipherArray = [];

    const lowerCaseString = string.toLowerCase();

    for (let i = 0; i < lowerCaseString.length; i++) {
        if (/[a-zA-Z]/.test(lowerCaseString[i])) {
            const index = alphabetArray.indexOf(lowerCaseString[i]);
            let newIndex = (index + number) % 26;
            if (newIndex < 0) {
                newIndex += 26;
            }
            const newChar = alphabetArray[newIndex].toUpperCase();
            cipherArray.push(newChar);
        } else {
            cipherArray.push(lowerCaseString[i]);
        }
    }
    return cipherArray.join('');
}
module.exports.caesarCipher = caesarCipher;

function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('input must be array')
    }
    if (arr.length === 0) {
        throw new Error('array must have length greater than 0')
    }

    const sum = arr.reduce((total, num) => total + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const {length} = arr;

    return {
        average,
        min,
        max,
        length
    };
}
module.exports.analyzeArray = analyzeArray;