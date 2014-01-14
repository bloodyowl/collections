module.exports = function(start, end, step) {
  var range = []
    , index = -1
    , length
  if(step == null) {
    step = 1
  }
  if(arguments.length < 2) {
    end = start
    start = 0
  }
  length = ~~((start > end ? start - end : end - start) / step)
  while(--length > -1) {
    range[++index] = start
    if(step > 0) {
      start += step
      continue
    }
    start -= step
  }
  return range
}
