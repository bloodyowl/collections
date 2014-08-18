var tape = require("tape")
var indexOf = require("../lib/indexOf")

tape("indexOf", function(test){

  test.equal(indexOf([1,2,3,2], 2), 1, "Returns the first matching index")
  test.equal(indexOf([1,2,3,2], 6), -1, "Returns -1 when doesn't find anything")
  test.end()

})
