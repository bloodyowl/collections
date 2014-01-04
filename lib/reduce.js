var getKeys = require("./getKeys")
  , createCallback = require("./createCallback")
  , isArrayLike = require("./isArrayLike")

module.exports = function(collection, fn, initialValue, thisValue){
  var index = -1, length
    , keys, key
    , callback = createCallback(fn, thisValue, 4)
    , result
  if(!collection) return null
  if(isArrayLike(collection)) {
    length = collection.length
    result = arguments.length > 2 ? initialValue : collection[++index]
    while(++index < length) {
      result = callback(result, collection[index], index, collection)
    }
    return result
  }
  keys = getKeys(collection)
  length = keys.length
  result = arguments.length > 2 ? initialValue : collection[keys[++index]]
  while(++index < length) {
    key = keys[index]
    result = callback(result, collection[key], key, collection)
  }
  return result
}
