var getKeys = require("./getKeys")

module.exports = function(object){
  var keys = getKeys(object)
    , index = -1, length = keys.length
    , values = [], key
  while(++index < length) {
    key = keys[index]
    values[index] = [key, object[key]]
  }
  return values
}
