var tape = require("tape")
  , indexOf = require("../lib/lastIndexOf")

tape("lastIndexOf", function(test){

  test.equal(indexOf([1,2,3,2], 2), 3, "Returns the last matching index")
  test.equal(indexOf([1,2,3,2], 6), -1, "Returns -1 when doesn't find anything")
  test.end()

})
