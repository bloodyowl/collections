var tape = require("tape")
  , isArrayLike = require("../lib/isArrayLike")

tape("isArrayLike", function(test){
  
  test.equal(isArrayLike([]), true, "Array")
  test.equal(isArrayLike((function(){return arguments})()), true, "Arguments")
  test.equal(isArrayLike({0:1,length:1}), true, "Objects")
  
  test.end()
})
