var tape = require("tape")
var extend = require("../lib/extend")

tape("extend", function(test){

  var object
  function Obj(){
    this.foo = "bar"
    this.bar = "baz"
    this.constructor = "foo"
  }

  Obj.prototype.baz = "foo"

  object = new Obj

  test.deepEqual(extend({}, object), {foo:"bar", bar:"baz", constructor:"foo"})
  test.end()
})
