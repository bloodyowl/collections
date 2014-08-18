var tape = require("tape")
var pluck = require("../lib/pluck")

tape("pluck", function(test){

  var object
  var array
  var aggregator
  var lastIndex

  function Obj(){
    this.foo = {foo:1}
    this.bar = {foo:2}
    this.constructor = {foo:3}
  }

  Obj.prototype.baz = {foo:4}

  object = new Obj
  array = [{foo:1},{foo:2}]
  aggregator = []
  lastIndex
  array[3] = {foo:3}


  test.equal(pluck(void 0, function(){}), null, "Ignores falsy values")
  test.deepEqual(pluck(array, "foo"), [1, 2, null, 3], "Maps on Arrays")
  test.deepEqual(pluck(object, "foo"), {"foo":1, "bar":2, "constructor":3}, "Maps on Object")

  test.end()
})
