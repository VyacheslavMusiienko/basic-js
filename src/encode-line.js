const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

//done 
function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let x = 1;    
  let result = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
      x += 1;
    } else {
      result += x + str[i];
      x = 1;
    }
  }
  return result.split('1').join('');
}

module.exports = {
  encodeLine
};
