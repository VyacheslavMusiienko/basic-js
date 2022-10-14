const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result:'',
  arr: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length
  },
  addLink( value ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let str = `( ${value} )~~`;
    this.arr.push(str);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    if (this.arr[position - 1]) {
      delete this.arr[position - 1];
    } else {
      this.arr = [];
      throw new NotImplementedError("You can't remove incorrect link!");
    }
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.result = this.arr.join('').slice(0, -2);
    this.arr = [];
    return this.result;
  }
};

module.exports = {
  chainMaker
};
