var getKeys = require("./getKeys")
  , createCallback = require("./createCallback")
  , isArrayLike = require("./isArrayLike")

module.exports = function(collection, fn, thisValue){
  var index = -1, length
    , keys, key
    , callback = createCallback(fn, thisValue, 3)
    , result
  if(!collection) return null
  if(isArrayLike(collection)) {
    length = collection.length
    result = Array(length)
    while(++index < length) {
      result[index] = callback(collection[index], index, collection)
    }
    return result
  }
  keys = getKeys(collection)
  result = {}
  length = keys.length
  while(++index < length) {
    key = keys[index]
    result[key] = callback(collection[key], key, collection)
  }
  return result
}
