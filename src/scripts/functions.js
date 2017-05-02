// TODO: These are functions for demo purposes!

/**
 * Adds a 0 to a number and converts it to string if it is less than 9.
 * Used to display time accurately.
 * @param  {number}   val   The number that needs to be displayed correctly.
 * @return {string}         The padded string, can be used in timer.
 */
export function pad(val) {
  return val > 9 ? val : '0' + val;
}

/**
 * Takes a string and converts it to a node
 * @param  {string} html The string (formatted like html) that needs to get converted
 * @return {object}      An object that can be rendered in the DOM.
 */
export function createNode(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
}
