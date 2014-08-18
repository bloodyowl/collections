var objectPrototype = Object.prototype
var enumBugProperties = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
]
var hasEnumBug = !objectPrototype.propertyIsEnumerable.call(
  {constructor : 1},
  "constructor"
)
var _hasOwnProperty = objectPrototype.hasOwnProperty
var hasObjectKeys = typeof Object.keys == "function"
var objectKeys = Object.keys

module.exports = function(object){
  var index
  var keys
  var length
  var enumKey

  if(object == null) {
    return []
  }
  if(hasObjectKeys) {
    return objectKeys(object)
  }
  keys = []
  for(index in object) {
    if(_hasOwnProperty.call(object, index)) {
      keys.push(index)
    }
  }
  if(hasEnumBug) {
    index = -1
    length = enumBugProperties.length
    while(++index < length) {
      enumKey = enumBugProperties[index]
      if(_hasOwnProperty.call(object, enumKey)) {
        keys.push(enumKey)
      }
    }
  }
  return keys
}
