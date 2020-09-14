# PICKETE

Tiny, light weight yet powerful Javascript utility library focused on common repetitive tasks and number manipulations for data analysis (under development).

## Features

- Light weight
- Dependency free
- Powerful math functions

## Quick start

### Installation

with npm:

```bash
npm install pickete
```

In node.js:

```javascript
// Load the module
const pick = require("pickete");

// Use static methods
const range = pick.range(5); // [0, 1, 2, 3, 4, 5]

// Instantiate the class
// If you don't provide a number as argument it initializes as 0
const num = new pick();

// You can chain methods.
num
  .add(10)
  .multiply(10)
  .div(2);
  
// When done simply retrive the value like so
num.value; // 50
```
