# Stone.js: Pipeline

[![npm](https://img.shields.io/npm/l/@stone-js/pipeline)](https://opensource.org/licenses/Apache-2.0)
[![npm](https://img.shields.io/npm/v/@stone-js/pipeline)](https://www.npmjs.com/package/@stone-js/pipeline)
[![npm](https://img.shields.io/npm/dm/@stone-js/pipeline)](https://www.npmjs.com/package/@stone-js/pipeline)
![Maintenance](https://img.shields.io/maintenance/yes/2025)
[![Publish Package to npmjs](https://github.com/stonemjs/pipeline/actions/workflows/release.yml/badge.svg)](https://github.com/stonemjs/pipeline/actions/workflows/release.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

An implementation based on the Chain of Responsibility (aka CoR) design pattern.
In summary; the pipelines take a job, process it, and forward it to the next pipeline.

---

## Synopsis

The `Pipeline` class is a versatile utility designed to manage and execute a series of operations on a set of input values through multiple configurable "pipes". Pipes can be either functions or class methods that process values sequentially. It allows for flexible configuration, including synchronous and asynchronous execution, custom method invocation on each pipe, and dependency injection through a resolver or container. The new resolver mechanism can be customized using `PipelineOptions` to provide different ways of resolving pipes.

## Installation

The `Pipeline` library is available from the [`npm registry`](https://www.npmjs.com/) and can be installed as follows:

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

> [!NOTE]
> This package is Pure ESM. If you are unfamiliar with what that means or how to handle it in your project, 
> please refer to [`this guide on Pure ESM packages`](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

Make sure your project setup is compatible with ESM. This might involve updating your `package.json` or using certain bundler configurations.

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

### Configuring with `PipelineOptions` and Custom Resolver

The `Pipeline` class can now be configured using an options parameter called `PipelineOptions`, which allows you to pass a custom **resolver** to resolve the pipes. This enables greater flexibility in configuring how pipes are resolved and instantiated during pipeline execution.

Here's an example of how you can use the resolver to manage dependency resolution:

```typescript
import { Pipeline, MixedPipe, PipeInstance, Passable } from '@stone-js/pipeline';

// Custom resolver function to resolve pipes
const customResolver = <T extends Passable, R extends Passable | T = T>(pipe: MixedPipe): PipeInstance<T, R> => {
  if (typeof pipe === 'function') {
    return new pipe() as PipeInstance<T, R>;
  }
  throw new Error(`Cannot resolve pipe: ${String(pipe)}`);
};

// Create a new pipeline instance with the custom resolver
const pipeline = Pipeline.create({
  resolver: customResolver,
});

// Configure and execute the pipeline
pipeline.send('customResolver')
  .through([(value: string, next: (val: string) => string) => next(value.toUpperCase())])
  .sync(true);

const result = pipeline.thenReturn();
console.log(result); // Output: "CUSTOMRESOLVER"
```

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
const result = await pipeline.thenReturn();

// Output after 1 second: 50
console.log(result);
```

### Dependency Injection with Custom Resolver

The new `resolver` approach allows you to manage the resolution of pipes more flexibly than using a container. Below is an updated example that uses a custom `resolver` instead of a `Container`.

```typescript
import { Pipeline, PipeResolver, Passable } from '@stone-js/pipeline';

// Create a custom resolver
const resolver: PipeResolver<Passable, Passable> = (pipe) => {
  if (typeof pipe === 'function') {
    return new pipe() as any; // Create an instance from the function pipe
  }
  throw new Error(`Pipe could not be resolved: ${pipe}`);
};

// Set up the pipeline with the resolver
const pipeline = Pipeline.create({
  resolver,
});

// Use the pipeline
pipeline.send('example').through([
  {
    pipe: (value: string, next: (value: string) => string) => next(value.toLowerCase()),
  },
]);

const result = pipeline.thenReturn();
console.log(result); // Output: "example"
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

### Pipe Executor Order

The `Pipeline` class allows you to control the order in which pipes are executed using the `priority` attribute in the `MetaPipe` configuration. Each pipe in the pipeline can be assigned an optional priority level, which determines its execution order.

#### MetaPipe Configuration

The `MetaPipe` interface represents a configuration object for pipes, which includes the pipe to execute, optional parameters, and a priority level:

```typescript
export interface MetaPipe {
  /** The pipe to execute, which can be a function or a string identifier. */
  pipe: Pipe;
  /** An optional array of parameters to pass to the pipe. */
  params?: unknown[];
  /** An optional priority level of the pipe. */
  priority?: number;
}
```

- **`pipe`**: The pipe to execute, which can be either a function or a string identifier.
- **`params`**: Optional parameters that are passed to the pipe during execution.
- **`priority`**: An optional number that specifies the priority level of the pipe. Pipes are executed in order of their priority, with lower values indicating higher priority.

#### Setting Pipe Priorities

When adding pipes to the pipeline, you can assign different priority levels to control their execution order. By default, all pipes have the same priority level, but you can adjust these values to ensure certain operations are performed before others.

For example:

```typescript
import { Pipeline, MetaPipe } from '@stone-js/pipeline';

// Create pipes with different priority levels
const pipe1: MetaPipe = {
  pipe: (value: number, next: (value: number) => number) => next(value + 1),
  priority: 1, // High priority, executed first
};

const pipe2: MetaPipe = {
  pipe: (value: number, next: (value: number) => number) => next(value * 2),
  priority: 2, // Lower priority, executed after pipe1
};

// Create a new pipeline and configure it with prioritized pipes
const pipeline = new Pipeline<number>();
pipeline.send(1).through([pipe2, pipe1]).sync(true);

// Execute the pipeline
const result = pipeline.thenReturn();
console.log(result); // Output: 4 (1 + 1, then multiplied by 2)
```

In this example, `pipe1` is executed first because it has a higher priority (`priority: 1`), while `pipe2` is executed afterward (`priority: 2`). By default, if no priority is provided, all pipes are treated equally and executed in the order they are added.

## Summary

The `Pipeline` class now offers additional flexibility in how you manage the lifecycle of the pipes. You can provide a custom **resolver** to determine how each pipe is instantiated or resolved before it is executed. This allows for both dependency injection and straightforward function-based pipes, making it suitable for a wide variety of use cases.

## API documentation

- [API](https://github.com/stonemjs/pipeline/blob/main/docs/modules.md)

## Contributing

See [Contributing Guide](https://github.com/stonemjs/pipeline/blob/main/CONTRIBUTING.md).

## Credits
- [Laravel Pipeline](https://github.com/laravel/framework/blob/10.x/src/Illuminate/Pipeline/Pipeline.php)