var getKeys = require("./getKeys")
  , createCallback = require("./createCallback")
  , isArrayLike = require("./isArrayLike")

module.exports = function(collection, fn, thisValue){
  var index = -1, length
    , keys, key
    , callback = createCallback(fn, thisValue, 3)
  if(!collection) return
  if(isArrayLike(collection)) {
    length = collection.length
    while(++index < length) {
      if(callback(collection[index], index, collection) === false) break
    }
    return
  }
  keys = getKeys(collection)
  length = keys.length
  while(++index < length) {
    key = keys[index]
    if(callback(collection[key], key, collection) === false) break
  }
}
