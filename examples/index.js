const overridable = require('..');

const foo = overridable()
  .add(a => Math.pow(a, 2))
  .add((a, b) => a * b)
  .add((a, b, c) => a + b + c)
  .result();

console.log(foo(3)); // 9
console.log(foo(2, 3)); // 6
console.log(foo(1, 2, 3)); // 6
console.log(foo(1, 2, 3, 4)); // Error
