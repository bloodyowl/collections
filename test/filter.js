var tape = require("tape")
  , filter = require("../lib/filter")

tape("filter", function (test) {
  
  var object, array, aggregator, lastIndex
  
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

  test.equal(filter(void 0, function () {}), null, "Ignores falsy values")
  test.deepEqual(
    filter(array, function (a) {
      return !(a % 2)
    }).join(), "2,", "Filter on Arrays")

  filter([1], function () {
    test.equal(this, Obj, "thisValue is passed with Array")
  }, Obj)

  filter({
    foo: "bar"
  }, function () {
    test.equal(this, Obj, "thisValue is passed with Object")
  }, Obj)

  test.deepEqual(
    filter(object, function (a) {
      return !(a % 2)
    }), {
      "bar": 2
    }, "Filter on Object"
  )
  test.end()

})
