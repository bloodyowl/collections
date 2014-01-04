var getKeys = require("./getKeys")
  , createCallback = require("./createCallback")
  , isArrayLike = require("./isArrayLike")

module.exports = function(collection, fn, initialValue, thisValue){
  var length
    , keys, key
    , callback = createCallback(fn, thisValue, 4)
    , result
  if(!collection) return null
  if(isArrayLike(collection)) {
    length = collection.length
    result = arguments.length > 2 ? initialValue : collection[--length]
    while(--length > -1) {
      result = callback(result, collection[length], length, collection)
    }
    return result
  }
  keys = getKeys(collection)
  length = keys.length
  result = arguments.length > 2 ? initialValue : collection[keys[--length]]
  while(--length > -1) {
    key = keys[length]
    result = callback(result, collection[key], key, collection)
  }
  return result
}
