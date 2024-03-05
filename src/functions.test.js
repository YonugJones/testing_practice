const { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } = require('./functions');

// 1.
test('return capitalized first letter string', () => {
    expect(capitalize('string')).toBe('String')
});

// 2.
test('return reversed string', () => {
    expect(reverseString('string')).toBe('gnirts')
});

// 3.
describe('Calculator', () => {

    test('returns the sum of two numbers', () => {
        expect(Calculator.add(5, 8)).toBe(13)
    });

    test('returns the difference of two numbers', () => {
        expect(Calculator.subtract(10, 2)).toBe(8)
    });

    test('returns the product of two numbers', ()=> {
        expect(Calculator.multiply(5, 5)).toBe(25)
    })

    test('returns the quotient of two numbers', () => {
        expect(Calculator.divide(48, 12)).toBe(4)
    })

});

// 4.
test('return caesar ciphertext', () => {
    expect(caesarCipher('Beware the Ides of March.', 7)).toBe('ILDHYL AOL PKLZ VM THYJO.')
});

// 5. 

test('return option with analysis of array', () => {
    const inputArray = [1,8,3,4,2,6];
    const resultObject = analyzeArray(inputArray);
    
    expect(resultObject.average).toBe(4);
    expect(resultObject.min).toBe(1);
    expect(resultObject.max).toBe(8);
    expect(resultObject.length).toBe(6);

});




// TEST
// template:

// test('', () => {
//     expect().toBe()
// });

// test is a function provided by Jest for defining individual test cases. 
// It takes two arguments, a string (the description of the test case) and a function (the actual test code). 
// Inside the test function, you call methods on your class instance, provide specific arguments, 
// and use expect statements to assert the expected behavior.

// DESCRIBE
// template:

// describe('', () => {

// });

// describe is a way to group your tests. It takes two arguments, a string (the name of the group) 
// and a function (the actual test suite). 



// BEFOREEACH
// template:

// beforeEach(() => {
//
// });

// beforeEach is a function provided by Jest (and other testing frameworks) 
// that allows you to run some setup code before each test case in a describe block. 
// This ensures that each test case operates on a clean instance of the Calculator class without interference from previous tests.


