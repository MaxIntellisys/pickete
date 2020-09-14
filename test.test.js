import assert from "assert";
import pick from "./index.js";

const range = pick.range(5);
const range2 = pick.range(25, 30);
assert.deepStrictEqual(range, [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range2, [25, 26, 27, 28, 29, 30]);
assert.deepStrictEqual(pick.range(99).length, 100);

const random = pick.random(100);
assert.deepStrictEqual(typeof random, "number");
assert.deepStrictEqual(random < 100, true);

// console.log(random)

