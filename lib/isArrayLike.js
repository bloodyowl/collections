var _hasOwnProperty = {}.hasOwnProperty

module.exports = function(object){
  var length
  return object &&
      parseInt(length = object.length, 10) === length &&
        !length || _hasOwnProperty.call(object, length - 1)
}
