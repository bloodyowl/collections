var getKeys = require("./getKeys")
var createCallback = require("./createCallback")
var isArrayLike = require("./isArrayLike")

module.exports = function(collection, fn, thisValue){
  var index = -1
  var length
  var keys
  var key
  var callback = createCallback(fn, thisValue, 3)
  if(!collection) return
  if(isArrayLike(collection)) {
    length = collection.length
    while(++index < length) {
      if(callback(collection[index], index, collection) === false) {
        break
      }
    }
    return
  }
  keys = getKeys(collection)
  length = keys.length
  while(++index < length) {
    key = keys[index]
    if(callback(collection[key], key, collection) === false) {
      break
    }
  }
}
