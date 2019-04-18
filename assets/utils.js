/* Contain utilitary functions */

function convertHectogrammsToKilograms(hectogramms) {
  return Math.round(Math.round(hectogramms * 10) / 10) / 10
}
/* Depending on the height of the pokemon in dm, return the scaled height with the corresponding unit */
function convertHeightTostr(height) {
  return height > 10 ? '' + height / 10 + ' m' : '' + height + ' dm'
}

export { convertHectogrammsToKilograms, convertHeightTostr }
