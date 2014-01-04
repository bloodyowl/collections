var tape = require("tape")
  , each = require("../lib/each")

tape("each", function(test){
  
  var object, array, aggregator, lastIndex
  function Obj(){
    this.foo = "bar"
    this.bar = "baz"
    this.constructor = function(){}
  }

  Obj.prototype.baz = "foo"

  object = new Obj
  array = [1,1]
  aggregator = []
  lastIndex
  array[3] = 1

  test.equal(each(void 0, function(){}), void 0, "Ignores falsy values")
  test.equal(each(array, function(){}), void 0, "Returns undefined")
  
  each([1], function(){
    test.equal(this, Obj, "thisValue is passed with Array")
  }, Obj)

  each({foo:"bar"}, function(){
    test.equal(this, Obj, "thisValue is passed with Object")
  }, Obj)

  each(array, function(item, index){
    aggregator.push(item, index)
  })

  test.equal(aggregator.join(), "1,0,1,1,,2,1,3", "Iteration on Array is correct")
  
  aggregator.length = 0

  each(object, function(item, index){
    aggregator.push(item, index)
  })

  test.deepEqual(aggregator, ["bar","foo","baz","bar",object.constructor,"constructor"], "Iteration on Object is correct")

  each(array, function(item, index){
    lastIndex = index
    if(index > 1) return false
  })

  test.equal(lastIndex, 2, "Early exit")
  test.end()

})
