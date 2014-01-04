var objectPrototype = Object.prototype
  , enumBugProperties = [
        "constructor"
      , "hasOwnProperty"
      , "isPrototypeOf"
      , "propertyIsEnumerable",
      , "toLocaleString"
      , "toString"
      , "valueOf"
    ]
  , hasEnumBug = !objectPrototype.propertyIsEnumerable.call({constructor:1}, "constructor")
  , _hasOwnProperty = objectPrototype.hasOwnProperty
  , hasObjectKeys = typeof Object.keys == "function"
  , objectKeys = Object.keys

module.exports = function(object){
  var index
    , keys
    , length
    , enumKey
    
  if(object == null) return []
  if(hasObjectKeys) return objectKeys(object)
  keys = []
  for(index in object) {
    if(_hasOwnProperty.call(object, index)) keys.push(index)
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
