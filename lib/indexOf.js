module.exports = function(array, value){
  var index = -1
  var length = array.length
  while(++index < length) {
    if(array[index] === value) {
      return index
    }
  }
  return -1
}
