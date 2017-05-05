(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pad = pad;
exports.createNode = createNode;
// TODO: These are functions for demo purposes!

/**
 * Adds a 0 to a number and converts it to string if it is less than 9.
 * Used to display time accurately.
 * @param  {number}   val   The number that needs to be displayed correctly.
 * @return {string}         The padded string, can be used in timer.
 */
function pad(val) {
  return val > 9 ? val : '0' + val;
}

/**
 * Takes a string and converts it to a node
 * @param  {string} html The string (formatted like html) that needs to get converted
 * @return {object}      An object that can be rendered in the DOM.
 */
function createNode(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = plane;
// This is a file for demo purposes.
// Use "export default" when you want to export the entire file/function
function plane() {
  console.log('The airplane is soooo fast!');
}

},{}],3:[function(require,module,exports){
'use strict';

var _functions = require('./functions');

var _plane = require('./plane');

var _plane2 = _interopRequireDefault(_plane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Only imported for demo purposes
(0, _plane2.default)();

},{"./functions":1,"./plane":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9mdW5jdGlvbnMuanMiLCJzcmMvc2NyaXB0cy9wbGFuZS5qcyIsInNyYy9zY3JpcHRzL3NjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDUWdCLEcsR0FBQSxHO1FBU0EsVSxHQUFBLFU7QUFqQmhCOztBQUVBOzs7Ozs7QUFNTyxTQUFTLEdBQVQsQ0FBYSxHQUFiLEVBQWtCO0FBQ3ZCLFNBQU8sTUFBTSxDQUFOLEdBQVUsR0FBVixHQUFnQixNQUFNLEdBQTdCO0FBQ0Q7O0FBRUQ7Ozs7O0FBS08sU0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQy9CLE1BQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLE1BQUksU0FBSixHQUFnQixJQUFoQjtBQUNBLFNBQU8sSUFBSSxpQkFBWDtBQUNEOzs7Ozs7OztrQkNuQnVCLEs7QUFGeEI7QUFDQTtBQUNlLFNBQVMsS0FBVCxHQUFpQjtBQUM5QixVQUFRLEdBQVIsQ0FBWSw2QkFBWjtBQUNEOzs7OztBQ0hEOztBQUNBOzs7Ozs7QUFGQTtBQUlBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFRPRE86IFRoZXNlIGFyZSBmdW5jdGlvbnMgZm9yIGRlbW8gcHVycG9zZXMhXG5cbi8qKlxuICogQWRkcyBhIDAgdG8gYSBudW1iZXIgYW5kIGNvbnZlcnRzIGl0IHRvIHN0cmluZyBpZiBpdCBpcyBsZXNzIHRoYW4gOS5cbiAqIFVzZWQgdG8gZGlzcGxheSB0aW1lIGFjY3VyYXRlbHkuXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgdmFsICAgVGhlIG51bWJlciB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBjb3JyZWN0bHkuXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgVGhlIHBhZGRlZCBzdHJpbmcsIGNhbiBiZSB1c2VkIGluIHRpbWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkKHZhbCkge1xuICByZXR1cm4gdmFsID4gOSA/IHZhbCA6ICcwJyArIHZhbDtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIHN0cmluZyBhbmQgY29udmVydHMgaXQgdG8gYSBub2RlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWwgVGhlIHN0cmluZyAoZm9ybWF0dGVkIGxpa2UgaHRtbCkgdGhhdCBuZWVkcyB0byBnZXQgY29udmVydGVkXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgQW4gb2JqZWN0IHRoYXQgY2FuIGJlIHJlbmRlcmVkIGluIHRoZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGh0bWwpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICByZXR1cm4gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xufVxuIiwiLy8gVGhpcyBpcyBhIGZpbGUgZm9yIGRlbW8gcHVycG9zZXMuXG4vLyBVc2UgXCJleHBvcnQgZGVmYXVsdFwiIHdoZW4geW91IHdhbnQgdG8gZXhwb3J0IHRoZSBlbnRpcmUgZmlsZS9mdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhbmUoKSB7XG4gIGNvbnNvbGUubG9nKCdUaGUgYWlycGxhbmUgaXMgc29vb28gZmFzdCEnKTtcbn1cbiIsIi8vIE9ubHkgaW1wb3J0ZWQgZm9yIGRlbW8gcHVycG9zZXNcbmltcG9ydCB7IGNyZWF0ZU5vZGUsIHBhZCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBwbGFuZSBmcm9tICcuL3BsYW5lJztcblxucGxhbmUoKTtcbiJdfQ==
