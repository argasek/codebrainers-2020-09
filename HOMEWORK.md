# Homework

Comrade! In case of doubt, ASK. Always ask! <3 :-))

### Homework 2021-01-30

#### Task 1.

Show as many fields of the object representing the plant in
the `<Plants>` component. For starters, display it "as is".

#### Task 2.
Extend the `<Plant>` component with as much logic as you can!

I.e. so fields like `blooming` are not displayed as "true", but
instead render as "blooming" / "not blooming". Or use some
awesome icon from FontAwesome! 

Some fields are easier to map than others. Don't worry if you
have no idea what to do with, example, `last_feritilized` field
(which is a ISO 8601 string).

Don't forget to map `required_exposure` and friends into something
nice. `"low"` is not nice. I would rather prefer to read something
like "Some shade" or "Indirect sunlight" (i.e. map `string` to
another `string`).

#### Task 3.

You probably noticed the "Rooms" tab doesn't display anything.
Take a look at both `Categories` and `Plants` components and
modify `Rooms` in such way that it displays list of rooms.
Make it a `<Table>`.

#### Task 4**.

As you probably noticed, the information on categories and room
assignment in `<Plants>` table is rendered as numbers (i.e. `id`s).
Think of a way of displaying data using string values. Eg. when
you look into `http://localhost:3000/categories`, you will notice
category `id === 2` belongs to "Tillandsia (airplants)". The
expectation is that this exact string is displayed for particular
plant having `category_id === 2`. 


### Homework 2021-01-21

#### Task 1.

Modify code in such way that the `<button>…</button>` element present
in `App` component is moved from `App` to `StudentList` (i.e. into
`<th>` element of this component). The button should (obviously!) work
in the same way it used to work.

#### Task 2*.

Modify code in such way (after completing Task 1) that clicking
`<button>` changes order of sorting not all, but this particular
`<StudentList>` where the button is present.


### Homework 2021-01-16

#### Task 1.

Modify our React app in such way that each StudentList is rendered
along with information on sorting criteria. For example, put some
nice table caption over the table which prints name of the field
chose and direction (like: 'fullName', true).

Bonus points, if you instead print something nice to eye, like:
"Sort by: Student's full name, sort direction: ascending"

#### Task 2.

When given sorting column is chosen, modify column header to indicate
so, by means of changing the cell background color.

#### Task 3*.

When given sorting column is chosen, modify column cells so their
color of background becomes more and more dark, i.e. first cell should
be white, middle should be 50% gray and the last cell should be black.


### Homework 2021-01-14

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

## 2021-01-12

### Task 1

Modify `index.js` code in such way, that it allows to exchange
a `Wheel` in any type of `Vehicle`, not just in `Car`s (and classes
which inherit from `Car`).

### Task 2

Take care of a case when there are no spare wheels left in the
vehicle. How should app behave in such case? Think of it and implement
a solution (tip: there is no single way to approach this problem).

### Task 3

Implement a method which allows to add a new spare wheel to
`Vehicle`, but only if it fits this `Vehicle`. In other words,
`CarWheel` can fit only `Car`. `SedanCarWheel` goes to `SedanCar`.
And so on.

Important: I don't expect that you implement some generic rule, i.e.
I don't expect a situation that adding a new `BicycleClass` automatically
checks for `BicycleWheel`. Just make some sane checks and use
method override (i.e. inheritance) to check for proper class.


## 2021-01-09

### Task 1

Finish task we started up during our course hours, i.e. implement
correctly working `didEmployeeWorkOvertime()`, which determines
if employee worked for more than 40h / week.


## 2021-01-07

### Task 1

Modify `mapper()` function in such way that surnames concatenated
to names have a proper Polish inflection (example: 'Jan Kowalski',
but 'Janina Kowalska'). Surnames which require applying inflection
are those which indices in `surnames` table have corresponding
`true` values in `flexTable` (i.e. if they are `false`, we just
concatenate surname as is).

Tip 1: You can go with `if` or ternary operator `a ? b : c`

### Task 2

Modify `filter()` function in such way that only female names
are selected for further processing as a result.


## 2021-01-05

### Task 1

Implement kind of "protection" mechanism, which will prevent user
from providing non-numeric answers. The solution should work in
such way that user should be asked **the same** question as
originally asked, unless correct answer is provided. Then the
algorithm should continue as usual. (Tip: Remember to properly
deal with `NaN` value!).

### Task 2

Besides of informing user on passed (or not) exam, give him / her
feedback on number of correct and incorrect answers.

### Task 3*

How would you modify the code in order to show all correct and
all incorrect results provided.





