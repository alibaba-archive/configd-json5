'use strict'
/* global describe, it */
var configd = require('configd')
var configdJSON5 = require('../index.js')

// Load plugin
configdJSON5(configd)

describe('configd-json5', function () {
  var mergedConfig = {
    name: 'json5',
    version: '0.5.0',
    contributors: [
      'Max Nanasy <max.nanasy@gmail.com>',
      'Andrew Eisenberg <andrew@eisenberg.as>',
      'Jordan Tucker <jordanbtucker@gmail.com>'
    ],
    license: 'MIT'
  }

  it('Should parse json5 file correctly', function (done) {
    configd([`${__dirname}/package.json5`, `${__dirname}/package.json`]).then(function (merged) {
      merged.should.eql(mergedConfig)
      done()
    }).catch(done)
  })
})
