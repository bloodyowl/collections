var getKeys = require("./getKeys")
var isArrayLike = require("./isArrayLike")

module.exports = function(object){
  if(isArrayLike(object)) {
    return object.length
  }
  return getKeys(object).length
}
