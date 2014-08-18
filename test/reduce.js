var tape = require("tape")
var reduce = require("../lib/reduce")

tape("reduce", function(test){
  var object
  var array
  var aggregator
  var lastIndex

  function Obj() {
    this.foo = 1
    this.bar = 2
    this.constructor = 3
  }

  Obj.prototype.baz = 4

  object = new Obj
  array = [1, 2]
  aggregator = []
  lastIndex

  array[3] = 3

  test.equal(
    reduce(void 0, function () {}),
    null,
    "Ignores falsy values"
  )

  test.deepEqual(
    reduce(array, function (a, b) {
      return a + (typeof b == "number" ? b : 0)
    }, 0), 6, "Reduce on Arrays"
  )

  test.deepEqual(
    reduce(array, function (a, b) {
      return a + (typeof b == "number" ? b : 0)
    }), 6, "Reduce on Arrays without initial value"
  )

  reduce([1], function () {
    test.equal(
      this, Obj, "thisValue is passed with Array"
    )
  }, 0, Obj)

  reduce({
    foo: "bar"
  }, function () {
    test.equal(
      this, Obj, "thisValue is passed with Object"
    )
  }, 0, Obj)

  test.equal(
    reduce(object, function (a, b) {
      return a + b
    }, 0), 6, "Reduce on Object"
  )

  test.equal(
    reduce(object, function (a, b) {
      return a + b
    }), 6, "Reduce on Object without inital value"
  )

  test.equal(
    reduce([""], function (a, b) {
      return a + b
    }, void 0), "undefined", "Authorizes undefined as initialValue"
  )

  test.end()
})
