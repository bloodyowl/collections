var getKeys = require("./getKeys")

module.exports = function(object){
  var keys = getKeys(object)
  var index = -1
  var length = keys.length
  var values = []
  var key
  while(++index < length) {
    key = keys[index]
    values[index] = [key, object[key]]
  }
  return values
}
