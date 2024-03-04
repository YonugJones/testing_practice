const { capitalize, reverseString } = require('./functions');

test('return capitalized first letter string', () => {
    expect(capitalize('string')).toBe('String')
});

test('return reversed string', () => {
    expect(reverseString('string')).toBe('gnirts')
});

describe('Calculator', () => {
    let calc;

    beforeEach()


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

// describe is a way to group your tests. It takes two arguments, a string (the name of the group) and a function (the actual test suite). 
// It's not specifically for class names; you can use it to group any related tests together. In the provided example, 
// we're using it to group tests related to the Calculator class.


// BEFOREEACH
// template:

// beforeEach(() => {
//
// });

// beforeEach is a function provided by Jest (and other testing frameworks) 
// that allows you to run some setup code before each test case in a describe block. 
// In this case, we're using it to create a new instance of the Calculator class before each test case. 
// This ensures that each test case operates on a clean instance of the Calculator class without interference from previous tests.


