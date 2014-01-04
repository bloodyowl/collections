var tape = require("tape")
  , reduceRight = require("../lib/reduceRight")

tape("reduceRight", function(test){
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
  test.equal(reduceRight(void 0, function(){}), null, "Ignores falsy values")

  test.deepEqual(
      reduceRight(array, function(a,b){return a + (b == null ? "" : "" + b)}, "4")
    , "4321"
    , "Reduce on Arrays"
  )

  test.deepEqual(
      reduceRight(array, function(a,b){return a + (b == null ? "" : "" + b)})
    , "321"
    , "Reduce on Arrays without initial value"
  )

  reduceRight([1], function(){
    test.equal(
        this
      , Obj
      , "thisValue is passed with Array"
    )
  }, 0, Obj)

  reduceRight({foo:"bar"}, function(){
    test.equal(
        this
      , Obj
      , "thisValue is passed with Object"
    )
  }, 0, Obj)

  test.equal(
      reduceRight(object, function(a,b){return a + (b == null ? "" : "" + b)}, "4")
    , "4321"
    , "Reduce on Object"
  )

  test.equal(
      reduceRight(object, function(a,b){return a + (b == null ? "" : "" + b)})
    , "321"
    , "Reduce on Object without inital value"
  )

  test.equal(
      reduceRight([""], function(a,b){return a + b}, void 0)
    , "undefined"
    , "Authorizes undefined as initialValue"
  )
  test.end()
})