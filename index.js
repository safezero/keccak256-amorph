const _keccak256 = require('js-sha3').keccak_256
const Amorph = require('amorph')
const amorphBufferPlugin = require('amorph-buffer')
const arguguard = require('arguguard')

Amorph.loadPlugin(amorphBufferPlugin)
Amorph.ready()

module.exports = function keccak256(prehash) {
  arguguard('keccak256', [Amorph], arguments)
  return prehash.as('uint8Array', (uint8Array) => {
    return Amorph.crossConverter.convert(_keccak256(uint8Array), 'hex', 'uint8Array')
  })
}
