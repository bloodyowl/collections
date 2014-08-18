var tape = require("tape")
var contains = require("../lib/contains")

tape("contains", function(test){

  test.equal(contains([1,2,3,2], 2), true, "Returns the first matching index")
  test.equal(contains([1,2,3,2], 6), false, "Returns -1 when doesn't find anything")
  test.end()

})
