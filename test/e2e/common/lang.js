/**
 * language fix
 */

const _ = require('lodash')

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = async () => {
  const lang = require('@electerm/electerm-locales/dist/en_us.js').lang
  return prefix => {
    return (id) => {
      return capitalizeFirstLetter(_.get(lang, `${prefix}.${id}`) || id)
    }
  }
}
