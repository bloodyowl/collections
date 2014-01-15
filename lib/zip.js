var pluck = require("./pluck")

module.exports = function(){
  var length = Math.max.apply(Math, pluck(arguments, "length")) || 0
    , array = Array(Math.max(0, length))
    , index = -1
  while(++index < length) {
    array[index] = pluck(arguments, index)
  }
  return array
}
