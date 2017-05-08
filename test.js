const keccak256 = require('./')
const Amorph = require('amorph')
const chai = require('chai')
const chaiAmorph = require('chai-amorph')

Amorph.loadPlugin(require('amorph-buffer'))
Amorph.ready()

chai.use(chaiAmorph)
chai.should()

describe('keccak256', () => {

  it('should hash correctly', () => {
    const prehash = new Amorph('hello world!', 'ascii')
    const hash = new Amorph('57caa176af1ac0433c5df30e8dabcd2ec1af1e92a26eced5f719b88458777cd6', 'hex')
    keccak256(prehash).should.amorphEqual(hash)
  })

})
