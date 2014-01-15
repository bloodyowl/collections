module.exports = function(start, end, step) {
  var range
    , index = -1
    , length
  if(step == null) {
    step = 1
  }
  if(arguments.length < 2) {
    end = start
    start = 0
  }
  length = ~~(Math.max(0, Math.max(start, end) - Math.min(start, end)) / Math.abs(~~step))
  range = Array(length)
  while(++index < length) {
    range[index] = start
    start += step
  }
  return range
}
