import assert from "assert";
import pick from "./index.js";

const actual = pick.range(5)
const expected = [ 0, 1, 2, 3, 4, 5]

assert.deepEqual(actual, expected)