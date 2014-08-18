var _hasOwnProperty = {}.hasOwnProperty

module.exports = function(array){
  var index = -1
  function fn(){
    if(++index > array.length) {
      return null
    }
    if(!(index in array)) {
      return fn()
    }
    return array[index]
  }
  return fn
}
