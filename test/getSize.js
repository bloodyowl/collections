var tape = require("tape")
  , getSize = require("../lib/getSize")

tape("getSize", function(test){

  var object
  function Obj(){
    this.foo = "bar"
    this.bar = "baz"
    this.constructor = "foo"
  }

  Obj.prototype.baz = "foo"

  object = new Obj

  test.equal(getSize(object), 3, "Objects")
  test.equal(getSize([1,2,3]) , 3, "Arrays")
  
  test.end()
})
