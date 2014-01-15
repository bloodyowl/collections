var tape = require("tape")
  , zip = require("../lib/zip")

tape("zip", function(test){
  
  test.deepEqual(
    zip(["foo", "bar"], [1, 2], [true, false]),
    [["foo", 1, true], ["bar", 2, false]]
  )
  
  test.deepEqual(
    zip(["foo", 1, true], ["bar", 2, false]),
    [["foo", "bar"], [1, 2], [true, false]],
    "reversed"
  )
  
  
  test.equal(
    zip(["foo", "bar", "baz"], [1, 2, 3], [true, false])[2][2],
    void 0,
    "gets null when no value"
  )
  test.end()

})
