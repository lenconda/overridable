# Overridable

Make JavaScript overridable.

## Introduction

JavaScript does not support overriding when we declare a function since JavaScript will cover the newer one with the older one. Thus, I made this package in order to enable this feature.

## Usage

```
npm i overridable -S
```

### `overridable`

Creates overridable object, includes

```
{
  // All of the function with different arguments
  functions: Array<Function>,
  // Add a function with a different arguments object
  add: Function<Function>,
  // If you add all the overrides, use this to get the final function
  result: Function;
};
```

### `add(fn: Function)`

Add a function to overridable object.

```javascript
overridable().add(() => {});
```

### `result()`

Returns the final function. If you add all the overrides, use this to get the final function.

```javascript
const foo = overridable().add(() => {}).result();
foo();
```

## Example

```javascript
const overridable = require('overridable');

const foo = overridable()
  .add(a => Math.pow(a, 2))
  .add((a, b) => a * b)
  .add((a, b, c) => a + b + c)
  .result();

console.log(foo(3)); // 9
console.log(foo(2, 3)); // 6
console.log(foo(1, 2, 3)); // 6
console.log(foo(1, 2, 3, 4)); // Error
```

## TODO

- [ ] Unit test support
- [ ] ES 2015 support
- [ ] NPM registry

## Issues

I am very glad if you can find some issues in this project. If you do find something strange or some questions, please make a issue at [https://github.com/lenconda/overridable/issues](https://github.com/lenconda/overridable/issues).

## Contribute

Thank you for your interest in this project. You are welcomed to make contributions on it. However, before you starting your contribution work, please read the following advice:

- Read the [README](https://github.com/lenconda/override#readme) first
- Understand what changes you want to make
- Look through the issue list and check if there's an issue to solve the same problem
- **Publish** or/and **redistribute** this project should under [MIT](LICENSE) license

If you decide to write your code in this project, you can fork this project as your own repository, check out to a new branch, from the newest code at `master` branch. The new branch would be your work bench.

If you want to commit your changes, you are supposed to make an [pull request](https://help.github.com/articles/about-pull-requests/), once you submit the request, the review process will start, if the code meets the requirements, the pull request will pass, and then your code will be in the project. If the request does not be passed, please contact [i@lenconda.top](mailto:i@lenconda.top) or [prexustech@gmail.com](mailto:prexustech@gmail.com).

## License

[MIT](LICENSE) &copy; Lenconda
