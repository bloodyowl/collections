var getKeys = require("./getKeys")
var createCallback = require("./createCallback")
var isArrayLike = require("./isArrayLike")

module.exports = function(collection, propertyName){
  var index = -1
  var length
  var item
  var keys
  var key
  var result
  if(!collection) {
    return null
  }
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
