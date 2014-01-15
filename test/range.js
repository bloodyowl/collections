var tape = require("tape")
  , range = require("../lib/range")

tape("range", function(test){
  
  test.deepEqual(range(0), [])
  test.deepEqual(range(5), [0,1,2,3,4])
  test.deepEqual(range(5, 9), [5,6,7,8])
  test.deepEqual(range(9, 5, -1), [9,8,7,6])
  test.deepEqual(range(0, 20, 5), [0, 5, 10, 15])
  test.deepEqual(range(0, 20, 5.5), [0, 5.5, 11, 16.5])
  test.deepEqual(range(0, -5, -1), [0, -1, -2, -3, -4])
  test.deepEqual(range(0, 10e3)[9999], 9999)
  test.end()
  
})
