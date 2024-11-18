**Pipeline Documentation v0.0.43** • [**Docs**](modules.md)

***

# Stone.js: Pipeline

[![npm](https://img.shields.io/npm/l/@stone-js/pipeline)](https://opensource.org/licenses/Apache-2.0)
[![npm](https://img.shields.io/npm/v/@stone-js/pipeline)](https://www.npmjs.com/package/@stone-js/pipeline)
[![npm](https://img.shields.io/npm/dm/@stone-js/pipeline)](https://www.npmjs.com/package/@stone-js/pipeline)
![Maintenance](https://img.shields.io/maintenance/yes/2024)
[![Publish Package to npmjs](https://github.com/stonemjs/pipeline/actions/workflows/release.yml/badge.svg)](https://github.com/stonemjs/pipeline/actions/workflows/release.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

An implementation based on the Chain of Responsibility (aka CoR) design pattern.
In summary; the pipelines take a job, process it, and forward it to the next pipeline.

---

## Synopsis

The `Pipeline` class is a versatile utility designed to manage and execute a series of operations on a set of input values through multiple configurable "pipes". Pipes can be either functions or class methods that process values sequentially. It allows for flexible configuration, including synchronous and asynchronous execution, custom method invocation on each pipe, and dependency injection via a container.

## Installation

To install the `Pipeline` utility, you need to add it to your project. Assuming it’s part of a package you manage.

NPM:

```bash
npm i @stone-js/pipeline
```

Yarn:

```bash
yarn add @stone-js/pipeline
```

PNPM:

```bash
pnpm add @stone-js/pipeline
```

The `Pipeline` module can only be imported via ESM import syntax:

```typescript
import { Pipeline } from '@stone-js/pipeline';
```

## Getting Started

The `Pipeline` class allows you to send objects through a series of operations. It’s highly configurable and designed to work with dependency injection.

### Compatibility with JavaScript and TypeScript

The `Pipeline` library is compatible with both **TypeScript** and **vanilla JavaScript** projects. While the examples provided are written in TypeScript for improved type safety and developer experience, you can also use `Pipeline` seamlessly in JavaScript environments without any modifications.

To use it in a JavaScript project, simply import the library as usual, and TypeScript types will not interfere. All TypeScript-specific features, such as type annotations, are optional and won't affect usage in JavaScript.

Here’s a simple example to get you started:

1. **Import the Pipeline class**:

   ```typescript
   import { Pipeline } from '@stone-js/pipeline';
   ```

2. **Create a new Pipeline instance**:

   ```typescript
   // Creating a basic pipeline
   const pipeline = new Pipeline<number>();
   
   // Setting up pipes (functions that will transform the passable value)
   const addOne = (value: number, next: (value: number) => number) => next(value + 1);
   const multiplyByTwo = (value: number, next: (value: number) => number) => next(value * 2);
   
   // Configure the pipeline
   pipeline.send(1).through([addOne, multiplyByTwo]).sync();
   
   // Run the pipeline and get the result
   const result = pipeline.thenReturn(); 
   
   console.log(result); // Output: 4
   ```

In the above example:
- `send(1)` initializes the pipeline with a value of `1`.
- `through([addOne, multiplyByTwo])` sets up the transformation functions (pipes).
- `sync(true)` sets synchronous execution.
- `thenReturn()` runs the pipeline, with the output being `(1 + 1) * 2 = 4`.

## Usage

The `Pipeline` class provides an easy way to chain operations and execute them on an initial set of values. Below, you will find some typical usage patterns to help you get started.

### Basic Configuration and Execution

Here is a simple usage example that demonstrates how to use the `Pipeline` class to send data through a series of transformations:

```typescript
import { Pipeline } from '@stone-js/pipeline';

// Step 1: Create the pipeline instance
const pipeline = new Pipeline<string>();

// Step 2: Create a few pipes (transformation functions)
const toUpperCase = (value: string, next: (value: string) => string) => next(value.toUpperCase());
const addGreeting = (value: string, next: (value: string) => string) => next(`Hello, ${value}!`);

// Step 3: Set the initial passable value and add pipes to the pipeline
pipeline.send("world").through([toUpperCase, addGreeting]).sync(true);

// Step 4: Execute the pipeline and obtain the result
const result = pipeline.then((value) => value);

console.log(result); // Output: "Hello, WORLD!"
```

### Asynchronous Pipeline

The `Pipeline` class also supports asynchronous pipes, allowing you to run asynchronous operations, such as fetching data from an API or performing an I/O operation.

```typescript
import { Pipeline } from '@stone-js/pipeline';

// Step 1: Create the pipeline instance
const pipeline = new Pipeline<number>();

// Step 2: Create asynchronous pipes
const fetchData = async (value: number, next: (value: number) => Promise<number>) => {
  const fetchedValue = await mockApiFetch(value);
  return next(fetchedValue);
};

const mockApiFetch = async (value: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value * 10), 1000);
  });
};

// Step 3: Configure the pipeline
pipeline.send(5).through([fetchData]);

// Step 4: Execute the pipeline asynchronously and get the result
const result = pipeline.thenReturn();

// Output after 1 second: 50
console.log(result);
```

### Dependency Injection with Container

The `Pipeline` class also allows you to use a dependency injection container to resolve pipe dependencies dynamically.

```typescript
import { Pipeline, Container } from '@stone-js/pipeline';

// Step 1: Set up a mock container
const container: Container = {
  resolve: (key) => {
    if (key === 'toUpperCase') {
      return {
        handle: (value: string, next: (value: string) => string) => next(value.toUpperCase()),
      };
    }
    throw new Error('Unknown dependency');
  },
  has: (key) => key === 'toUpperCase'
};

// Step 2: Create a pipeline with the container
const pipeline = new Pipeline<string>(container);

// Step 3: Use a string identifier to resolve pipes through the container
pipeline.send('hello').through(['toUpperCase']).sync();

// Step 4: Execute the pipeline
const result = pipeline.thenReturn();
console.log(result); // Output: "HELLO"
```

### Customizing Execution Method

The pipeline also allows customization of the method to call on each pipe using the `via()` method.

```typescript
import { Pipeline } from '@stone-js/pipeline';

class CustomPipe {
  transform(value: string, next: (value: string) => string): string {
    return next(value.split('').reverse().join(''));
  }
}

const pipeline = new Pipeline<string>();

pipeline.send('pipeline')
  .through([new CustomPipe()])
  .via('transform') // Set method to 'transform'
  .sync(true);

const result = pipeline.thenReturn();
console.log(result); // Output: "enilepip"
```

### Summary

The `Pipeline` class offers a powerful and flexible way to build and manage sequences of operations on data, with support for both synchronous and asynchronous workflows, custom method invocation, and dependency injection.

## API documentation

- [API](https://github.com/stonemjs/pipeline/blob/main/docs/modules.md)

## Contributing

See [Contributing Guide](https://github.com/stonemjs/pipeline/blob/main/CONTRIBUTING.md).

## Credits
- [Laravel Pipeline](https://github.com/laravel/framework/blob/10.x/src/Illuminate/Pipeline/Pipeline.php)
