# Homework

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
