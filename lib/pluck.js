var getKeys = require("./getKeys")
  , createCallback = require("./createCallback")
  , isArrayLike = require("./isArrayLike")

module.exports = function(collection, propertyName){
  var index = -1, length, item
    , keys, key
    , result
  if(!collection) return null
  if(isArrayLike(collection)) {
    length = collection.length
    result = Array(length)
    while(++index < length) {
      result[index] = (item = collection[index]) != null ? item[propertyName] : null
    }
    return result
  }
  keys = getKeys(collection)
  result = {}
  length = keys.length
  while(++index < length) {
    key = keys[index]
    result[key] = (item = collection[key]) != null ? item[propertyName] : null
  }
  return result
}
