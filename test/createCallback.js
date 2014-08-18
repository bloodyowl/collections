var tape = require("tape")
var createCallback = require("../lib/createCallback")

tape("createCallback", function(test){

  var thisValue = {}

  createCallback(function(){
    test.equal([].join.call(arguments, "."), "", "length 0 arguments")
    test.equal(this, thisValue, "length 0 thisValue")
  }, thisValue, 0)(1,2,3,4,5,6)

  createCallback(function(){
    test.equal([].join.call(arguments, "."), "1", "length 1 arguments")
    test.equal(this, thisValue, "length 1 thisValue")
  }, thisValue, 1)(1,2,3,4,5,6)

  createCallback(function(){
    test.equal([].join.call(arguments, "."), "1.2", "length 2 arguments")
    test.equal(this, thisValue, "length 2 thisValue")
  }, thisValue, 2)(1,2,3,4,5,6)

  createCallback(function(){
    test.equal([].join.call(arguments, "."), "1.2.3", "length 3 arguments")
    test.equal(this, thisValue, "length 3 thisValue")
  }, thisValue, 3)(1,2,3,4,5,6)

  createCallback(function(){
    test.equal([].join.call(arguments, "."), "1.2.3.4", "length 4 arguments")
    test.equal(this, thisValue, "length 4 thisValue")
  }, thisValue, 4)(1,2,3,4,5,6)

  createCallback(function(){
    test.equal([].join.call(arguments, "."), "1.2.3.4.5.6", "length isn't cut after 5 arguments")
    test.equal(this, thisValue, "length 5 thisValue")
  }, thisValue, 5)(1,2,3,4,5,6)

  test.end()

})
