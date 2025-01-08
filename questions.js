const questions = [
    {
      question: `
  console.log(num); 
  num = 10; 
  // What will happen?
      `,
      options: [
        "ReferenceError: num is not defined",
        "10",
        "undefined",
        "TypeError: Cannot access 'num'",
      ],
      correct: 2,
    },
    {
      question: `
  console.log(typeof null);
  // What is the output?
      `,
      options: [
        "object",
        "null",
        "undefined",
        "string",
      ],
      correct: 0,
    },
    {
      question: `
  function foo() {
    console.log(this);
  }
  foo();
  // What will 'this' refer to?
      `,
      options: [
        "The global object (window in browsers)",
        "The foo function",
        "undefined",
        "An empty object",
      ],
      correct: 0,
    },
    {
      question: `
  let x = [1, 2, 3] + [4, 5, 6];
  console.log(x);
  // What will be logged?
      `,
      options: [
        "'1,2,34,5,6'",
        "NaN",
        "TypeError",
        "'1,2,3,4,5,6'",
      ],
      correct: 0,
    },
    {
      question: `
  console.log(0.1 + 0.2 === 0.3);
  // What is the output?
      `,
      options: [
        "true",
        "false",
        "undefined",
        "NaN",
      ],
      correct: 1,
    },
    {
      question: `
  (function() {
    var a = b = 3;
  })();
  console.log(typeof b);
  // What is the output?
      `,
      options: [
        "number",
        "undefined",
        "ReferenceError",
        "object",
      ],
      correct: 0,
    },
    {
      question: `
  console.log(!!"false" === !!"true");
  // What is the output?
      `,
      options: [
        "true",
        "false",
        "undefined",
        "ReferenceError",
      ],
      correct: 0,
    },
    {
      question: `
  let a = 5;
  let b = a++;
  console.log(a, b);
  // What is logged?
      `,
      options: [
        "6, 5",
        "5, 5",
        "6, 6",
        "5, 6",
      ],
      correct: 0,
    },
    {
      question: `
  let a = {};
  let b = {};
  console.log(a == b, a === b);
  // What is logged?
      `,
      options: [
        "true, true",
        "false, true",
        "true, false",
        "false, false",
      ],
      correct: 3,
    },
    {
      question: `
  let a = NaN;
  console.log(a === NaN);
  // What is logged?
      `,
      options: [
        "true",
        "false",
        "undefined",
        "TypeError",
      ],
      correct: 1,
    },
    {
      question: `
  console.log("5" - 3);
  // What will be the output?
      `,
      options: [
        "'53'",
        "2",
        "'2'",
        "NaN",
      ],
      correct: 1,
    },
    {
      question: `
  const arr = [1, 2, 3];
  arr[10] = 99;
  console.log(arr.length);
  // What will be logged?
      `,
      options: [
        "3",
        "10",
        "11",
        "99",
      ],
      correct: 2,
    },
    {
      question: `
  console.log([..."hello"]);
  // What will be logged?
      `,
      options: [
        "['hello']",
        "['h', 'e', 'l', 'l', 'o']",
        "undefined",
        "TypeError",
      ],
      correct: 1,
    },
    {
      question: `
  console.log(typeof typeof 1);
  // What will be logged?
      `,
      options: [
        "number",
        "string",
        "object",
        "undefined",
      ],
      correct: 1,
    },
    {
      question: `
  const obj = { a: "one", b: "two", a: "three" };
  console.log(obj);
  // What will be logged?
      `,
      options: [
        "{ a: 'one', b: 'two' }",
        "{ a: 'three', b: 'two' }",
        "{ a: 'one', a: 'three', b: 'two' }",
        "SyntaxError",
      ],
      correct: 1,
    },
    {
      question: `
  console.log(typeof NaN);
  // What is the output?
      `,
      options: [
        "number",
        "NaN",
        "undefined",
        "object",
      ],
      correct: 0,
    },
    {
      question: `
  let arr = [1, 2, 3];
  delete arr[1];
  console.log(arr);
  // What will be logged?
      `,
      options: [
        "[1, undefined, 3]",
        "[1, 2, 3]",
        "[1, null, 3]",
        "[1, , 3]",
      ],
      correct: 3,
    },
    {
      question: `
  const obj = {};
  console.log(obj.__proto__ === Object.prototype);
  // What is logged?
      `,
      options: [
        "true",
        "false",
        "undefined",
        "ReferenceError",
      ],
      correct: 0,
    },
    {
      question: `
  console.log(true + false);
  // What will be logged?
      `,
      options: [
        "1",
        "truefalse",
        "0",
        "undefined",
      ],
      correct: 0,
    },
    {
      question: `
  console.log('5' + 5);
  // What will be logged?
      `,
      options: [
        "'55'",
        "10",
        "TypeError",
        "NaN",
      ],
      correct: 0,
    },
    
    {
      question: `
  What is the difference between \`==\` and \`===\` in JavaScript?
      `,
      options: [
        "\`==\` compares values, \`===\` compares values and types.",
        "\`===\` compares only values.",
        "\`==\` compares types, \`===\` compares values.",
        "Both are exactly the same.",
      ],
      correct: 0,
    },
    {
      question: `
  console.log([] == []);
  // What is the output?
      `,
      options: [
        "true",
        "false",
        "undefined",
        "TypeError",
      ],
      correct: 1,
    },
    {
      question: `
  What does the following code log?
  \`console.log(0.1 + 0.2 === 0.3);\`
      `,
      options: [
        "true",
        "false",
        "undefined",
        "NaN",
      ],
      correct: 1,
    },
    {
      question: `
  Which of the following methods adds a new element to the beginning of an array?
      `,
      options: [
        "push()",
        "unshift()",
        "concat()",
        "splice()",
      ],
      correct: 1,
    },
    {
      question: `
  console.log(typeof Infinity);
  // What is the output?
      `,
      options: [
        "'undefined'",
        "'number'",
        "'Infinity'",
        "'object'",
      ],
      correct: 1,
    },
    {
      question: `
  What is the difference between \`const\` and \`Object.freeze()\`?
      `,
      options: [
        "\`const\` prevents reassignment; \`Object.freeze()\` prevents modifications to properties.",
        "\`const\` makes an object immutable; \`Object.freeze()\` doesn't.",
        "\`Object.freeze()\` is for arrays only.",
        "\`const\` is faster than \`Object.freeze()\`.",
      ],
      correct: 0,
    },
    {
      question: `
  function test() {
    console.log(x);
    var x = 10;
  }
  // What is the output of calling \`test()\`?
      `,
      options: [
        "10",
        "undefined",
        "ReferenceError",
        "TypeError",
      ],
      correct: 1,
    },
    {
      question: `
  What will be the output of the following?
  \`console.log('5' - 3);\`
      `,
      options: [
        "53",
        "2",
        "'53'",
        "NaN",
      ],
      correct: 1,
    },
    {
      question: `
  What does the \`Array.prototype.map()\` method return?
      `,
      options: [
        "A new array",
        "A single value",
        "The modified array",
        "An object",
      ],
      correct: 0,
    },
    {
      question: `
  What is the output of:
  \`console.log([] + {});\`
      `,
      options: [
        "'[object Object]'",
        "''",
        "NaN",
        "undefined",
      ],
      correct: 0,
    },
    {
      question: `
  What is the purpose of the \`Promise.all()\` method?
      `,
      options: [
        "Resolves multiple promises sequentially.",
        "Waits for all promises to resolve or reject.",
        "Handles only rejected promises.",
        "Executes promises in parallel.",
      ],
      correct: 1,
    },
    {
      question: `
  console.log(typeof [] === typeof {});
  // What is the output?
      `,
      options: [
        "true",
        "false",
        "'object'",
        "'undefined'",
      ],
      correct: 1,
    },
    {
      question: `
  How can you clone an object in JavaScript?
      `,
      options: [
        "Using Object.assign({}, obj)",
        "Using JSON.parse(JSON.stringify(obj))",
        "Using spread operator ({...obj})",
        "All of the above",
      ],
      correct: 3,
    },
    {
      question: `
  What is the output of:
  \`console.log(1 || 0);\`
      `,
      options: [
        "1",
        "0",
        "undefined",
        "true",
      ],
      correct: 0,
    },
    {
      question: `
  What does \`Object.create()\` do?
      `,
      options: [
        "Creates a new object with specified prototype.",
        "Clones an object.",
        "Merges two objects.",
        "Creates an empty object.",
      ],
      correct: 0,
    },
    {
      question: `
  What is a JavaScript generator function?
      `,
      options: [
        "A function that generates random numbers.",
        "A function that returns an iterator and uses \`yield\`.",
        "A function that creates objects.",
        "A function that runs continuously.",
      ],
      correct: 1,
    },
    {
      question: `
  console.log(null || 'default');
  // What is the output?
      `,
      options: [
        "'default'",
        "null",
        "undefined",
        "true",
      ],
      correct: 0,
    },
    {
      question: `
  What is the purpose of the \`finally\` block in a try-catch statement?
      `,
      options: [
        "Executes only if an error occurs.",
        "Executes only if no error occurs.",
        "Executes always, regardless of error.",
        "Throws an error.",
      ],
      correct: 2,
    },
    {
      question: `
  What does \`use strict\` do in JavaScript?
      `,
      options: [
        "Enables strict parsing of code.",
        "Prevents certain actions and throws more exceptions.",
        "Runs the code faster.",
        "Fixes all coding issues.",
      ],
      correct: 1,
    },
    {
      question: `
  console.log([...[1, 2], ...[3, 4]]);
  // What is the output?
      `,
      options: [
        "[[1, 2], [3, 4]]",
        "[1, 2, 3, 4]",
        "'1,2,3,4'",
        "TypeError",
      ],
      correct: 1,
    },
   
    {
    question: `
What is the default value of the \`this\` keyword in a regular function in strict mode?
    `,
    options: [
      "undefined",
      "window",
      "null",
      "An empty object",
    ],
    correct: 0,
  },
  {
    question: `
Which of the following is NOT a JavaScript data type?
    `,
    options: [
      "String",
      "Number",
      "Float",
      "Boolean",
    ],
    correct: 2,
  },
  {
    question: `
console.log(typeof NaN);
// What will the output be?
    `,
    options: [
      "undefined",
      "number",
      "object",
      "NaN",
    ],
    correct: 1,
  },
  {
    question: `
Which method is used to remove the last element of an array in JavaScript?
    `,
    options: [
      "shift()",
      "pop()",
      "remove()",
      "delete()",
    ],
    correct: 1,
  },
  {
    question: `
Which of the following is true about \`let\` and \`var\`?
    `,
    options: [
      "\`let\` is block-scoped; \`var\` is function-scoped.",
      "\`var\` is block-scoped; \`let\` is function-scoped.",
      "Both are block-scoped.",
      "Both are function-scoped.",
    ],
    correct: 0,
  },
  {
    question: `
What will be the output of \`console.log(null == undefined);\`?
    `,
    options: [
      "true",
      "false",
      "null",
      "undefined",
    ],
    correct: 0,
  },
  {
    question: `
console.log([] + []);
// What will be the output?
    `,
    options: [
      "'[]'",
      "'[object Object]'",
      "'' (an empty string)",
      "undefined",
    ],
    correct: 2,
  },
  {
    question: `
Which method is used to convert a JSON string into a JavaScript object?
    `,
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "Object.fromJSON()",
      "Object.parse()",
    ],
    correct: 0,
  },
  {
    question: `
What will happen if you access a variable declared with \`let\` before initialization?
    `,
    options: [
      "It will return undefined.",
      "It will throw a ReferenceError.",
      "It will return null.",
      "It will throw a SyntaxError.",
    ],
    correct: 1,
  },
  {
    question: `
Which of the following methods can be used to merge two arrays in JavaScript?
    `,
    options: [
      "concat()",
      "merge()",
      "splice()",
      "add()",
    ],
    correct: 0,
  },
  {
    question: `
What does the \`Array.prototype.reduce()\` method return?
    `,
    options: [
      "An array",
      "A single value",
      "A new array with reduced values",
      "Undefined",
    ],
    correct: 1,
  },
  {
    question: `
What will \`typeof NaN\` return?
    `,
    options: [
      "'undefined'",
      "'number'",
      "'NaN'",
      "'object'",
    ],
    correct: 1,
  },
  {
    question: `
console.log(1 + '1');
// What is the output?
    `,
    options: [
      "'11'",
      "2",
      "SyntaxError",
      "NaN",
    ],
    correct: 0,
  },
  {
    question: `
What is the purpose of the \`bind()\` method in JavaScript?
    `,
    options: [
      "Creates a new function with the same body and scope.",
      "Creates a new function with a specified \`this\` context.",
      "Calls a function immediately with a specified \`this\` context.",
      "Adds a function to an object.",
    ],
    correct: 1,
  },
  {
    question: `
What will the following code return?
\`Boolean('false');\`
    `,
    options: [
      "true",
      "false",
      "undefined",
      "TypeError",
    ],
    correct: 0,
  },
  {
    question: `
Which statement best describes closures in JavaScript?
    `,
    options: [
      "Functions with their own scope.",
      "Functions bundled with their lexical environment.",
      "Functions executed immediately after definition.",
      "Functions with no parameters.",
    ],
    correct: 1,
  },
  {
    question: `
What is the result of \`console.log([] == ![]);\`?
    `,
    options: [
      "true",
      "false",
      "undefined",
      "TypeError",
    ],
    correct: 0,
  },
  {
    question: `
How can you check if a value is an array in JavaScript?
    `,
    options: [
      "typeof value === 'array'",
      "value instanceof Array",
      "Array.isArray(value)",
      "Both 2 and 3",
    ],
    correct: 3,
  },
  {
    question: `
console.log(typeof function() {});
// What will this log?
    `,
    options: [
      "'function'",
      "'object'",
      "'undefined'",
      "'null'",
    ],
    correct: 0,
  },
  {
    question: `
Which of the following statements is true for \`Object.freeze()\`?
    `,
    options: [
      "Freezes an object and prevents any modifications.",
      "Freezes an object and allows changes to nested objects.",
      "Prevents deletion of object properties.",
      "Makes the object immutable and deletes its methods.",
    ],
    correct: 0,
  },
  // Add more questions in the same format to reach 100...
];
