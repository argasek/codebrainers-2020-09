# Homework

Comrade! In case of doubt, ASK. Always ask! <3 :-))

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
