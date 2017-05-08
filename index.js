const _keccak256 = require('js-sha3').keccak_256
const arguguard = require('arguguard')

function hexStringToByte(str) {
  var a = [];
  for (var i = 0, len = str.length; i < len; i+=2) {
    a.push(parseInt(str.substr(i,2),16));
  }
  return new Uint8Array(a);
}


module.exports = function keccak256(prehash) {
  arguguard('keccak256', ['Amorph'], arguments)
  return prehash.as('uint8Array', (uint8Array) => {
    return hexStringToByte(_keccak256(uint8Array))
  })
}
