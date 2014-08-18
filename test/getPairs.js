var tape = require("tape")
var getPairs = require("../lib/getPairs")

tape("getPairs", function(test){

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

  test.deepEqual(getPairs(object), [["foo", "bar"], ["bar", "baz"], ["constructor", object.constructor]], "with object")
  test.deepEqual(getPairs(array), [["0",1], ["1",1], ["3",1]], "with array")
  test.deepEqual(getPairs(null), [], "with null")
  test.deepEqual(getPairs(), [], "with undefined")
  test.end()

})
