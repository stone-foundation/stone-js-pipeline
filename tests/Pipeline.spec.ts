import { Pipeline } from '../src/Pipeline'
import { PipelineError } from '../src/PipelineError'
import { PipeExecutor, PipeResolver } from '../src/declarations'

describe('Pipeline Class', () => {
  let mockResolver: PipeResolver<number>

  beforeEach(() => {
    mockResolver = vi.fn()
  })

  it('should create a pipeline instance using the static create method', () => {
    const pipeline = Pipeline.create({ resolver: mockResolver })
    expect(pipeline).toBeInstanceOf(Pipeline)
  })

  it('should set the default priority', () => {
    const pipeline = Pipeline.create()
    pipeline.defaultPriority(20)
    // @ts-expect-error - access private member for test purposes
    expect(pipeline._defaultPriority).toBe(20)
  })

  it('should set the passable objects', () => {
    const pipeline = Pipeline.create<number>()
    pipeline.send(1)
    // @ts-expect-error - access private member for test purposes
    expect(pipeline.passable).toBe(1)
  })

  it('should set the pipes with a default priority', () => {
    const pipeline = Pipeline.create<number>()
    const pipe = vi.fn()
    pipeline.through(pipe)
    // @ts-expect-error - access private member for test purposes
    expect(pipeline.sortedMetaPipes.length).toBe(1)
    // @ts-expect-error - access private member for test purposes
    expect(pipeline.sortedMetaPipes[0].module).toBe(pipe)
  })

  it('should add additional pipes to the pipeline', () => {
    const pipeline = Pipeline.create<number>()
    const pipe1 = vi.fn()
    const pipe2 = vi.fn()
    pipeline.through(pipe1)
    pipeline.pipe(pipe2)
    // @ts-expect-error - access private member for test purposes
    expect(pipeline.sortedMetaPipes.length).toBe(2)
  })

  it('should set the method to call on each pipe', () => {
    const pipeline = Pipeline.create<number>()
    pipeline.via('customMethod')
    // @ts-expect-error - access private member for test purposes
    expect(pipeline.method).toBe('customMethod')
  })

  it('should configure the pipeline to run synchronously or asynchronously', () => {
    const pipeline = Pipeline.create<number>()
    pipeline.sync(false)
    // @ts-expect-error - access private member for test purposes
    expect(pipeline.isSync).toBe(false)
  })

  it('should execute pipes in sequence and return the final result (sync)', () => {
    const pipe1 = (value: number, next: PipeExecutor<number, number>): number | Promise<number> => next(Number(value) + 1)
    const pipe2 = (value: number, next: PipeExecutor<number, number>, param1: number): number | Promise<number> => next(Number(value) * (2 + Number(param1)))
    const pipeline = Pipeline.create<number, number>().send(1).through(pipe1, { module: pipe2, params: [1] }).sync()
    const result = pipeline.then((value) => value)
    expect(result).toBe(6) // (1 + 1) * (2 + 1)
  })

  it('should execute pipes in sequence and return the final result (sync) with many passable', () => {
    const pipe1 = (value: number, next: PipeExecutor<number, string>): string | Promise<string> => next(Number(value) + 1)
    const pipe2 = () => (value: number, next: PipeExecutor<number, string>): string | Promise<string> => next(Number(value) + 1)
    const pipe3 = (value: number, next: PipeExecutor<number, string>, param1: number): string | Promise<string> => next(Number(value) * (2 + Number(param1)))
    const pipeline = Pipeline.create<number, string>().send(1).through(pipe1, { module: pipe2, isFactory: true }, { module: pipe3, params: [1] }).sync()
    const result = pipeline.then((value) => `The result is: ${value}`)
    expect(result).toBe('The result is: 9') // ((1 + 1) + (2 + 1)) * (2 + 1)
  })

  it('should execute pipes in sequence and return the final result (async)', async () => {
    const pipe1 = async (value: number, next: PipeExecutor<number>): Promise<number> => await next(Number(value) + 1)
    const pipe2 = class {
      value = 2
      handle = async (value: number, next: PipeExecutor<number, number>): Promise<number> => await next(Number(value) * this.value)
    }
    const pipeline = Pipeline.create<number>().send(1).pipe(pipe1, { module: pipe2, isClass: true })
    const result = await pipeline.thenReturn()
    expect(result).toBe(4) // (1 + 1) * 2
  })

  it('should throw an error if a pipe cannot be resolved', async () => {
    const pipeline = Pipeline.create<number>()
    await expect(async () => {
      await pipeline.send(1).through('invalidPipe').thenReturn()
    }).rejects.toThrow(PipelineError)
  })

  it('should throw an error if no passable is defined', async () => {
    const pipe1 = (value: number, next: PipeExecutor<number, number>): number | Promise<number> => next(Number(value) + 1)
    const pipeline = Pipeline.create<number>()
    pipeline.through(pipe1)
    await expect(async () => {
      await pipeline.thenReturn()
    }).rejects.toThrow(PipelineError)
  })

  it('should throw an error if the method is missing on the pipe', async () => {
    const invalidPipe = { someOtherMethod: vi.fn() }
    const mockResolver = vi.fn().mockReturnValue(invalidPipe)
    const pipeline = Pipeline.create<number>({ resolver: mockResolver })
    pipeline.send(1).through('invalidPipe')
    await expect(async () => {
      await pipeline.thenReturn()
    }).rejects.toThrow(PipelineError)
  })

  it('should call the container to resolve pipes when a container is provided', async () => {
    const Pipe = class {
      name (_value: number, _next: PipeExecutor<number, number>): number | Promise<number> { return 1 }
    }
    const mockResolver = vi.fn().mockReturnValue(new Pipe())
    const pipeline = Pipeline.create<number>({ resolver: mockResolver })
    await pipeline.send(1).via('name').through({ module: Pipe, isClass: true }).thenReturn()
    expect(mockResolver).toHaveBeenCalledWith({ pipe: Pipe, isClass: true })
  })
})
