var tape = require("tape")
  , getKeys = require("../lib/getKeys")

tape("getKeys", function(test){

  var object, array

  function Obj(){
    this.foo = "bar"
    this.bar = "baz"
    this.constructor = function(){}
  }
  
  Obj.prototype.baz = "foo"

  object = new Obj()
  array = [1,1]
    
  array[3] = 1

  test.deepEqual(getKeys(object), ["foo", "bar", "constructor"], "with object")
  test.deepEqual(getKeys(array), ["0", "1", "3"], "with array")
  test.deepEqual(getKeys(null), [], "with null")
  test.deepEqual(getKeys(), [], "with void 0")
  test.end()

})
