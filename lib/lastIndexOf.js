module.exports = function(array, value){
  var length = array.length
  while(--length > -1) {
    if(array[length] === value) return length
  }
  return -1
}
