function myEach(collection, callback) {
  // Iterates over the collection of elements, passing each element in turn to the callback function. Returns the original, unmodified, collection.
  // Check if the collection is an array or an object
  let newCollection = collection;
  if (!collection.isArray) {
    newCollection = Object.values(collection);
  }
  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }
  // returns the original collection
  return collection;
}
// console.log(myEach([1, 2, 3], alert));

function myMap(collection, callback) {
  // Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.
  let newCollection = collection;
  if (!collection.isArray) {
    newCollection = Object.values(collection);
  }
  // return a new array
  const newArray = []
  for (let i = 0; i < newCollection.length; i++) {
    newArray.push(callback(newCollection[i]));
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  // Reduce iterates through a collection of values and boils it down into a single value. acc (short for accumulator) starts at the value that's passed in as an argument, and with each successive step is updated to the return value of callback. If a start value is not passed to myReduce, the first value in the collection should be used as the start value.

  // The callback is passed three arguments: the current value of acc, the current element/value in our iteration, and a reference to the entire collection.

  // Hint: For the case when a start value for the accumulator is not passed in as an argument, think about how you'll need to adjust your function to account for the fact that the first element of the collection has already been accounted for.

  // Check if array or object
  let newCollection = collection;
  if (!collection.isArray) {
    newCollection = Object.values(collection);
  }
  
  // Check if no starting value for acc
  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  for (let i = 0; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i]);
  }
  return acc;
}

function myFind(collection, predicate) {
  // Looks through each value in the collection, returning the first one that passes a truth test (predicate) or undefined if no value passes the test. The function should return as soon as it finds an acceptable element, without traversing the rest of the collection.
  // Check if array or object
  let newCollection = collection;
  if (!collection.isArray) {
    newCollection = Object.values(collection);
  }

  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      return newCollection[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  // Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). If no matching values are found, it should return an empty array
  let newCollection = collection;
  if (!collection.isArray) {
    newCollection = Object.values(collection);
  }

  const newArray = [];
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      newArray.push(collection[i]);
    }
  }
  return newArray;
}

function mySize(collection) {
  // Return the number of values (integer) in the collection
  let newCollection = collection;
  if (!collection.isArray) {
    newCollection = Object.values(collection);
  }
  return newCollection.length;
}

/* --------------------ARRAY FUNCTIONS------------------ */
function myFirst(array, n) {
  // Returns the first element of an array. Passing n will return the first n elements of the array.
  if (n) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}

function myLast(array, n) {
  // Returns the last element of an array. Passing n will return the last n elements of the array.
  const len = array.length;
  let newArray = array.slice();
  if (n) {
    return array.slice((len - n), len);
  } else {
    return newArray.pop();
  }
}

// BONUS:
function mySortBy(array, callback) {
  // Returns a sorted copy of array, ranked in ascending order by the results of running each value through callback. The values from the original array (not the transformed values) should be returned in the sorted copy, in ascending order by the value returned by callback.

  // Note: The point of this exercise is not to write your own sorting algorithm and you are free to use the native JS sort (Links to an external site.). You will, however, need to construct your compareFunction (see the documentation) so that it will handle either numeric or string values.
  // http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code/
  const newArray = array.slice();
  return newArray.sort((a, b) => {
    return callback(a) - callback(b);
  })
}

// BONUS:
// function myFlatten(array, shallowArrBool, newArr = []) {
  // Flattens a nested array (the nesting can be to any depth).
  // If you pass true for the second argument, the array will only be flattened a single level.
// }

/*------------------- OBJECT FUNCTIONS -----------------*/
function myKeys(obj) {
  // Retrieve all the names of the object's enumerable properties. Returns an array
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

function myValues(obj) {
  // Return all of the values of the object's properties.
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}


// const unmodifiedTestArr = [1, 2, 3, 4]
// const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}


