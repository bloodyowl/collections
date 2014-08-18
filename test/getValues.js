var tape = require("tape")
var getValues = require("../lib/getValues")

tape("getValues", function(test){

  var object
  var array

  function Obj(){
    this.foo = "bar"
    this.bar = "baz"
    this.constructor = function(){}
  }

  Obj.prototype.baz = "foo"

  object = new Obj
  array = [1,1]
  array[3] = 1

  test.deepEqual(getValues(object), ["bar", "baz", object.constructor], "with object")
  test.deepEqual(getValues(array), [1, 1, 1], "with array")
  test.deepEqual(getValues(null), [], "with null")
  test.deepEqual(getValues(), [], "with undefined")
  test.end()

})
