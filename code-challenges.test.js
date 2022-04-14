// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("functionName", () => {
//   it("function purpose", () => {
//     expect(functionName(params)).toEqual("output")
//   })
// })



// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacci", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    // Example input: 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    // Example input: 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// Fails: ReferenceError: fibonacci is not defined

// b) Create the function that makes the test pass.

// [1, 1] the next item in the array is i-1, i-2
// for loop for iteration, control where it starts, run based off a given condition
// I can access indexes with the variable i and perform the addition needed

const fibonacci = (number) => {
  let fibArray = [1, 1]
  for(let i = 1; i < number-1; i++) {
    fibArray.push(fibArray[i] + fibArray[i - 1])
  }
  return fibArray
}

// recursion - a function that calls itself until a condition is met, returns a function call stack that then executes


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("onlyOddsSorted", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    expect(onlyOddsSorted(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(onlyOddsSorted(fullArr2)).toEqual([-823, 7, 23])
  })
})

// Failing: ReferenceError: onlyOddsSorted is not defined

// b) Create the function that makes the test pass.

// Create a function
// Takes in an array
// Iterate - filter on the condition of typeof === "number" && modulo to get odd numbers
// .sort((a, b) => a - b) // order of return parameters determine high to low or low to high

// -823 % 2 === 1
// false
// -823 % 2 !== 0
// true


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulatingSum", () => {
  it("that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    const numbersToAdd3 = []
    // Expected output: []
    expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accumulatingSum(numbersToAdd3)).toEqual([])
  })
})

// Fail: ReferenceError: accumulatingSum is not defined

// b) Create the function that makes the test pass.

// Create a function
// Takes in a array
// Iteration - output is the same length as the input map
// Archor outside of the iteration
// Add the current value to the anchor and return inside map
