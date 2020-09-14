/** Class representing a number to perform math operations on. */
class Pickete {
  /** Creates the number to keep trach of. */
  constructor(num) {
    this.current = num || 0;
  }

  /**
   * Gets the current obj value.
   * @returns {number} with the current value.
   */
  get value() {
    return this.current;
  }

  /**
   * Static method to quickly generate an array of numbers.
   * @param {number} start where the range starts.
   * @param {number} finish where the range ends.
   * @returns {Array.<number>} containing a range of numbbers.
   */
  static range(start, finish) {
    if (arguments.length === 1) {
      (start = 0), (finish = arguments[0]);
    }

    let range = [],
      num = start;
    for (num; num <= finish; num++) {
      range.push(num);
    }

    return range;
  }

  /**
   * Static method to generate a random integer number.
   * @param {number} top number up to it could be generated
   */
  static random(top) {
    return Math.floor(Math.random() * top);
  }

  /**
   * Method to take the average from an array of numbers
   * @param {Array.<number>} arr numbers to take average from.
   */
  average(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }

    this.current = Math.round(sum / arr.length);
    return this;
  }

  /**
   * Method that adds a to this.current value.
   * @param {number} num number to be addeed.
   */
  add(num) {
    this.current += num;
    return this;
  }

  /**
   * Method that substract a to this.current value.
   * @param {number} num number to be substracted.
   */
  subs(num) {
    this.current -= num;
    return this;
  }

  /**
   * Method that multiply this.current value.
   * @param {number} num number to be multiplyed for.
   */
  multiply(num) {
    this.current *= num;
    return this;
  }

  /**
   * Method that divide this.current value
   * @param {number} num number to be divided for.
   */
  div(num) {
    this.current /= num;
    return this;
  }

  /**
   * Method that gets the max value in an array and assings it to this.current.
   * @param {Array.<number>} arr array of numbers.
   */
  max(arr) {
    this.current = Math.max(...arr);
    return this;
  }

  /**
   * Method that gets the min value in an array and assings it to this.current.
   * @param {Array.<number>} arr array of numbers.
   */
  min(arr) {
    this.current = Math.min(...arr);
    return this;
  }

  /**
   * Method that sum values in an array and assings it to this.current.
   * @param {Array.<number>} arr array of numbers.
   */
  sumArray(arr) {
    const sum = arr.reduce((acc, val) => (acc += val));
    this.current = sum;
    return this;
  }
}

export default Pickete;
