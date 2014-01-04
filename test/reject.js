var tape = require("tape")
  , reject = require("../lib/reject")

tape("reject", function (test) {
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

  test.equal(reject(void 0, function () {}), null, "Ignores falsy values")
  test.deepEqual(
    reject(array, function (a) {
      return !(a % 2)
    }), [1,3], "reject on Arrays")

  reject([1], function () {
    test.equal(this, Obj, "thisValue is passed with Array")
  }, Obj)

  reject({
    foo: "bar"
  }, function () {
    test.equal(this, Obj, "thisValue is passed with Object")
  }, Obj)

  test.deepEqual(
    reject(object, function (a) {
      return !(a % 2)
    }), {
      "foo": 1,
      "constructor" : 3
    }, "reject on Object"
  )
  
  test.end()
})
