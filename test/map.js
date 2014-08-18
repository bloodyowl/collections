var tape = require("tape")
var map = require("../lib/map")

tape("map", function(test){

  var object
  var array
  var aggregator
  var lastIndex

  function Obj(){
    this.foo = 1
    this.bar = 2
    this.constructor = 3
  }

  Obj.prototype.baz = 4

  object = new Obj
  array = [1,2]
  aggregator = []
  lastIndex
  array[3] = 3


  test.equal(map(void 0, function(){}), null, "Ignores falsy values")
  test.deepEqual(map(array, function(a){return (a * a) || null}), [1, 4, null, 9], "with arrays")

  map([1], function(){
    test.equal(this, Obj, "thisValue is passed with Array")
  }, Obj)

  map({foo:"bar"}, function(){
    test.equal(this, Obj, "thisValue is passed with Object")
  }, Obj)

  test.deepEqual(map(object, function(a){return a * a}), {"foo":1, "bar":4, constructor:9}, "with Object")

  test.end()
})
