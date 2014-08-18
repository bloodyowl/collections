var getKeys = require("./getKeys")
var createCallback = require("./createCallback")
var isArrayLike = require("./isArrayLike")

module.exports = function(collection, fn, thisValue){
  var index = -1
  var length
  var keys
  var key
  var callback = createCallback(fn, thisValue, 3)
  var result
  var item
  if(!collection) {
    return null
  }
  if(isArrayLike(collection)) {
    length = collection.length
    result = []
    while(++index < length) {
      if(callback(item = collection[index], index, collection)) {
        result.push(item)
      }
    }
    return result
  }
  keys = getKeys(collection)
  result = {}
  length = keys.length
  while(++index < length) {
    key = keys[index]
    if(callback(item = collection[key], key, collection)) {
      result[key] = item
    }
  }
  return result
}
