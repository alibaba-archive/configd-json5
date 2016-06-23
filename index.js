'use strict'
var JSON5 = require('json5')

module.exports = function (configd) {
  // Register plugin
  configd.parser(/\.json5$/i, function (content) {
    return JSON5.parse(content)
  })
}
