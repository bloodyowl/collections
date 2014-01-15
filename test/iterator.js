var tape = require("tape")
  , iterator = require("../lib/iterator")

tape("iterator", function(test){
  
  var array = Array(5)
    , i = iterator(array)
  
  array.push(1, 2, 3, 4)
  
  test.equal(i(), 1, "ignores not defined properties; uses array ref")
  test.equal(i(), 2)
  test.equal(i(), 3)
  test.equal(i(), 4)
  test.equal(i(), null, "return null when over")
  test.end()
  
})
