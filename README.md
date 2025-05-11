# Stone.js: Pipeline

[![npm](https://img.shields.io/npm/l/@stone-js/pipeline)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/@stone-js/pipeline)](https://www.npmjs.com/package/@stone-js/pipeline)
[![npm](https://img.shields.io/npm/dm/@stone-js/pipeline)](https://www.npmjs.com/package/@stone-js/pipeline)
![Maintenance](https://img.shields.io/maintenance/yes/2025)
[![Publish Package to npmjs](https://github.com/stonemjs/pipeline/actions/workflows/release.yml/badge.svg)](https://github.com/stonemjs/pipeline/actions/workflows/release.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

An implementation of the Chain of Responsibility (CoR) pattern tailored for modern JavaScript and TypeScript apps using the Continuum Architecture philosophy.

---

## 🧠 Synopsis

The `Pipeline` class is a flexible processor of "passable" values through a series of configurable steps called pipes. Pipes can be functions, factory-generated handlers, or class instances. Pipelines can run synchronously or asynchronously, support custom hook events, and allow pipe resolution via a resolver for advanced dependency injection scenarios.

## 📦 Installation

```bash
npm i @stone-js/pipeline
# or
yarn add @stone-js/pipeline
# or
pnpm add @stone-js/pipeline
````

> \[!IMPORTANT]
> This package is **pure ESM**. Ensure your `package.json` includes `"type": "module"` or configure your bundler appropriately.

```ts
import { Pipeline } from '@stone-js/pipeline'
```

## ⚡️ Quick Start

```ts
import { Pipeline } from '@stone-js/pipeline'

const addOne = (v, next) => next(v + 1)
const timesTwo = (v, next) => next(v * 2)

const result = Pipeline.create<number>()
  .send(1)
  .through(addOne, timesTwo)
  .sync()
  .thenReturn()

console.log(result) // Output: 4
```

## ✅ Features

* Chain-of-responsibility execution
* Supports function, factory, and class-based pipes
* Works in both sync and async mode
* Custom `resolver` support
* Pipe lifecycle hooks via `on()`
* Priority-based execution order
* Type-safe with TypeScript, compatible with JavaScript

## 🧰 Usage Patterns

### Synchronous Pipeline

```ts
const pipeline = Pipeline.create<number>()
  .send(2)
  .through([
    (v, next) => next(v + 3),
    (v, next) => next(v * 2)
  ])
  .sync()

const result = pipeline.thenReturn()
console.log(result) // Output: 10
```

### Asynchronous Pipeline

```ts
const fetch = async (v, next) => next(await mockFetch(v))
const mockFetch = async (v) => new Promise(res => setTimeout(() => res(v * 10), 500))

const result = await Pipeline.create<number>()
  .send(5)
  .through(fetch)
  .thenReturn()

console.log(result) // Output: 50
```

### Using `.pipe()` Incrementally

```ts
const result = Pipeline.create<number>()
  .send(1)
  .pipe(v => v + 1)
  .pipe(v => v * 5)
  .sync()
  .thenReturn()

console.log(result) // Output: 10
```

### Resolver for Dependency Injection

```ts
class MyPipe {
  handle(v, next) {
    return next(`Resolved: ${v}`)
  }
}

const resolver = () => new MyPipe()

const result = Pipeline.create<string>({ resolver })
  .send('value')
  .through({ module: MyPipe, isClass: true })
  .sync()
  .thenReturn()

console.log(result) // Output: Resolved: value
```

### Hooking Into Lifecycle

```ts
const pipeline = Pipeline.create<number>()
  .on('onProcessingPipe', ({ passable }) => console.log('Processing', passable))
  .on('onPipeProcessed', ({ passable }) => console.log('Processed', passable))
  .send(3)
  .through((v, next) => next(v + 2))
  .sync()

const result = pipeline.thenReturn()
console.log(result) // Output: 5
```

### Factory and Class-Based Pipes

```ts
const factoryPipe = () => (v, next) => next(v + 2)

class CustomPipe {
  handle(v, next) {
    return next(v * 3)
  }
}

const result = Pipeline.create<number>()
  .send(1)
  .through(
    { module: factoryPipe, isFactory: true },
    { module: CustomPipe, isClass: true }
  )
  .sync()
  .thenReturn()

console.log(result) // Output: 9
```

### Using `.via()` to Customize Method Name

```ts
class Pipe {
  transform(value, next) {
    return next(value + '!')
  }
}

const result = Pipeline.create<string>()
  .send('Wow')
  .through({ module: Pipe, isClass: true })
  .via('transform')
  .sync()
  .thenReturn()

console.log(result) // Output: Wow!
```

### Priority-based Execution

```ts
const p1 = { module: (v, next) => next(v + 1), priority: 10 }
const p2 = { module: (v, next) => next(v * 2), priority: 20 }

const result = Pipeline.create<number>()
  .send(1)
  .through(p1, p2)
  .sync()
  .thenReturn()

console.log(result) // Output: 4 → (1 + 1) * 2
```

## 🧾 API

All methods are chainable:

* `.send(passable)`
* `.through(...pipes)`
* `.pipe(...pipes)`
* `.sync(true|false)`
* `.via(methodName)`
* `.on(hookName, listener)`
* `.then(fn)`
* `.thenReturn()`

> Pipes can be:
>
> * `Function`: `(value, next) => next(...)`
> * `Factory`: `() => (value, next) => ...`
> * `Class`: `new MyPipe().handle(...)`

## 📚 Documentation

* [Full API Docs](https://github.com/stonemjs/pipeline/blob/main/docs)

## 🤝 Contributing

See [Contributing Guide](https://github.com/stonemjs/pipeline/blob/main/CONTRIBUTING.md)

## 🙏 Credits

Inspired by [Laravel's Pipeline](https://github.com/laravel/framework/blob/10.x/src/Illuminate/Pipeline/Pipeline.php)