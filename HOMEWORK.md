# Homework

### Homework 2021-01-16

#### Task 1.

Implement `startAllEngines`, `areAllEnginesRunning()` and
`areAllEnginesStopped()` methods of `Vehicle` class.

```
const airplane = new Airplane();
airplane.startEngine(0);
airplane.startEngine(1);
airplane.startEngine(2);
airplane.startEngine(3);

airplane.stopEngine(1);

// areAllEnginesStopped() -> false

airplane.stopEngine(0);
airplane.stopEngine(2);
airplane.stopEngine(3);

// areAllEnginesStopped() -> true

```

#### Task 2.
Implement `isAnyEngineRunning()` method of `Vehicle` class.

```
const airplane = new Airplane();
// isAnyEngineRunning() -> false

airplane.startEngine(2);

// isAnyEngineRunning() -> true

```

#### Task 3.
Implement `areAtLeastThisMuchEnginesRunning(count)` method of `Vehicle` class.

```
const airplane = new Airplane();

airplane.startEngine(2);
airplane.startEngine(3);

// areAtLeastThisMuchEnginesRunning(2) -> true
// areAtLeastThisMuchEnginesRunning(3) -> false

```

#### Task 4.
Modify `areAllEnginesRunning()` method so it does not use `reduce()` but
it also doesn't use any loops (like `for`, `while`, etc.).


#### Task 5.*

Modify vehicle engine in such way that each engine produces
some level of noise (70db level of noise, 36 db). Level of noise
is a hit or miss, i.e. factory produces engines which have
better or worse parameters. What does it mean?

It means engines should have level of noise assigned randomly
during engine assembly ;-) to a value between (20-60) dB.

Implement method `isNoiseLevelExceeded(maximumNoiseLevel)` which
checks if total noise produced by all running (!!!!) engines
is greater than `maximumNoiseLevel`

Example: engines produce these much levels of noise:
```
0: 20
1: 45
2: 23
3: 60

airplane.startEngine(2);
airplane.startEngine(3);

totalNoiseLevel = 45 + 23;
```

```
isNoiseLevelExceeded(90) -> false // 45 + 23 < 90
```





