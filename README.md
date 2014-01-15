# collections

[![browser support](https://ci.testling.com/bloodyowl/collections.png)](https://ci.testling.com/bloodyowl/collections)

## Install 

```
$ npm install bloody-collections
```

## Require 

```
var collections = require("bloody-collections")
// or
var each = require("bloody-collections/each")
```

## API

### `each(collection, fn[, thisValue])`

Executes `fn` with `[item, index, collection]` as arguments (and an optional `thisValue`) for each item in `collection`. 

```javascript
each([1,2,3], function(item){
  console.log(item)
})
```

### `extend(source, object)` -> `source`

Pushes every `object` values to `source`

```javascript
var values = extend({}, defaultValues)
```

### `filter(collection, fn[, thisValue])` -> `new collection`

Executes `fn` with `[item, index, collection]` as arguments (and an optional `thisValue`) for each item in `collection`, and returns an collection filled with item with which `fn` returned a truthy value. 

```javascript
filter([1,2,3], function(item){ 
  return !(item % 2) 
}) // [2]
```

### `reject(collection, fn[, thisValue])` -> `new collection`

Executes `fn` with `[item, index, collection]` as arguments (and an optional `thisValue`) for each item in `collection`, and returns an collection filled with item with which `fn` returned a falsy value. 

```javascript
reject([1,2,3], function(item){ 
  return !(item % 2) 
}) // [1,3]
```


### `map(collection, fn[, thisValue])` -> `new collection`

Executes `fn` with `[item, index, collection]` as arguments (and an optional `thisValue`) for each item in `collection`, and returns an collection filled with the returned values of `fn`.

```javascript
map([1,2,3], function(item){ 
  return item * 2
}) // [2,4,6]
```

### `pluck(collection, property)` -> `new collection`

Return a collection filled with `item[property]` or `null` for each `item` in `collection`

```javascript
pluck([{1:1},{1:2},void 0,{1:3}], 1) // [1,2,null,3]
```

### `reduce(collection, fn[, defaultValue[, thisValue]])` -> `any`

Executes `fn` with `[lastReturnedValue, item, index, collection]` as arguments (and an optional `thisValue`) for each item in `collection`. Returns `lastReturnedValue`

```javascript
reduce([1,3,4], function(previous, actual){
  return previous + actual
}, "") // "134"
```

### `reduceRight(collection, fn[, defaultValue[, thisValue]])` -> `any`

Executes `fn` with `[lastReturnedValue, item, index, collection]` as arguments (and an optional `thisValue`) for each item in `collection`. Returns `lastReturnedValue`; like `reduce` but loops from the end to the start. 

```javascript
reduceRight([1,3,4], function(previous, actual){
  return previous + actual
}, "") // "431"
```

### `getKeys(collection)` -> `array`

Returns an array filled with `collection`'s keys. 

```javascript
getKeys({1:1,4:3}) // [1,4]
```

### `getValues(collection)` -> `array`

Returns an array filled with `collection`'s values. 

```javascript
getValues({1:1,4:3}) // [1,3]
```

### `getPairs(collection)` -> `array`

Returns an array filled with `collection`'s keys/values pairs. 

```javascript
getPairs({1:1,4:3}) // [[1,1],[4,3]]
```

### `getSize(collection)` -> `number`

Returns `collection`'s size (number of values). 

```javascript
getSize({1:1,4:3}) // 2
```

### `indexOf(array, value)` -> `number`

Returns first `value`'s index in `array` or `-1` if not found.

```javascript
indexOf([1,2,3,2], 2) // 1
indexOf([1,2,3,2], 4) // -1
```

### `lastIndexOf(array, value)` -> `number`

Returns first `value`'s index in `array` or `-1` if not found.

```javascript
lastIndexOf([1,2,3,2], 2) // 3
lastIndexOf([1,2,3,2], 4) // -1
```


### `contains(array, value)` -> `boolean`

Returns whether or not `array` contains `value`

```javascript
contains([1,2,3,2], 2) // true
contains([1,2,3,2], 4) // false
```


### `clone(value[, deep=false])` -> `clonedObject`

Clones `value` (optionaly `deep`).

```javascript
clone([1,2,3,2]) // [1,2,3,2]
clone({foo:"bar", bar:[1,2]}, true) // {foo:"bar", bar:[1,2]}
```

### `range([start=0,] end[, step=1]) -> array`

Creates an array filled with values from `start` to `end`, separated with `step`. 

```javascript
range(0) // []
range(5) // [0,1,2,3,4]
range(5, 9) // [5,6,7,8]
range(9, 5, -1) // [9,8,7,6]
range(0, 20, 5) // [0,5,10,15]
```


### `iterator(array) -> fn`

Returns a function that returns the next element in the array every time it is called. 
Works with sparse arrays. 

```javascript
var array = [1,2,3]
  , fn = iterator(array)
fn() // 1
fn() // 2
array.push(4)
fn() // 3
fn() // 4
fn() // null
```
