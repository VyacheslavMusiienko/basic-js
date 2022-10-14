const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// done
function repeater(str, options) {
  let result = [];
  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    result.push(str);
    for (let j = 0; j < (options.additionRepeatTimes || 1); j++) {
      if (options.addition === false || options.addition === null) result[i] += '' + options.addition;
      else result[i] += (options.addition || '');
      if (options.additionRepeatTimes === undefined || options.additionRepeatTimes - 1 === j) break;
      else result[i] += (options.additionSeparator || '|');
    }
  }
  return options.separator ? result.join(options.separator) : result.join('+')
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
