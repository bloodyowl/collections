module.exports = [
  function(fn, thisValue){
    return function(){
      return fn.call(thisValue)
    }
  },
  function(fn, thisValue){
    return function(a){
      return fn.call(thisValue, a)
    }
  },
  function(fn, thisValue){
    return function(a,b){
      return fn.call(thisValue, a, b)
    }
  },
  function(fn, thisValue){
    return function(a,b,c){
      return fn.call(thisValue, a, b, c)
    }
  },
  function(fn, thisValue){
    return function(a,b,c,d){
      return fn.call(thisValue, a, b, c, d)
    }
  },
  function(fn, thisValue){
    return function(){
      return fn.apply(thisValue, arguments)
    }
  }
]
