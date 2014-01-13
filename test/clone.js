var tape = require("tape")
  , clone = require("../lib/clone")

tape("clone", function(test){
  
  var array = [1,2,3,4,5]
    , object = (function(){
        function K(){
          this.constructor = "foo"
          this.foo = "bar"
        }
        K.prototype.bar = "baz"
        return new K()
      })()
    , clonedArray = clone(array)
    , clonedObject = clone(object)
    , deepArray = [1,2, [1,2, {foo:"bar"}], 3]
    , deepClonedArray = clone(deepArray, true)
  
  test.notEqual(array, clonedArray, "clone(array), reference not equal")
  test.deepEqual(array, clonedArray, "clone(array), deep equal")
  
  array[0] = 2
  test.equal(clonedArray[0], 1, "clone(array), reference broken")
  
  test.notEqual(object, clonedObject, "clone(object), reference not equal")
  test.deepEqual(object, clonedObject, "clone(object), deep equal")
  test.equal(clonedObject.constructor, "foo", "passes through `constructor` property")
  
  object.foo = "baz"
  test.equal(clonedObject.foo, "bar", "clone(object), reference broken")
  
  test.deepEqual(deepClonedArray, deepArray, "deep cloning")
  test.notEqual(deepClonedArray[2], deepArray[2], "deep cloning, inner array references")
  test.notEqual(deepClonedArray[2][2], deepArray[2][2], "deep cloning, inner object references")
  
  test.end()

})
