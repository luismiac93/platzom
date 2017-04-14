
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function () {
  it('ar', function () {
    const translation = platzom("programar")
    expect(translation).to.equal("program")

})
it('pe', function () {
const translation = platzom("Zorro")
const translation2 = platzom("Zarpar")

  expect(translation).to.equal("Zorrope")
  expect(translation2).to.equal("Zarppe")
})
it('-', function () {
const translation = platzom("abecedario")
expect(translation).to.equal("abece-dario")

})
it('Mm', function () {
  const translation = platzom("sometemos")
  expect(translation).to.equal("SoMeTeMoS")

})
})
