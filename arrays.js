var chocolateBars = {"snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = function(arrayName, elementName) {
  arrayName.push(elementName)
}

var destructivelyAddElementToBeginningOfArray = function(arrayName, elementName) {
  
  arrayName = [elementName, ...arrayName]
  
}

var accessElementInArray = function(arrayName, arrayIndex) {
  return arrayName[arrayIndex];
}

var destructivelyRemoveElementFromBeginningOfArray = function(arrayName) {
  arrayName = arrayName.shift()
  return arrayName;
}

var removeElementFromBeginningOfArray = function(arrayName) {
  return arrayName.slice(1);
}

var destructivnelyRemoveElementFromEndOfArray = function (arrayName) {
  return arrayName.pop();
}

var removeElementFromEndOfArray = function(arrayName) {
  return arrayName.slice(0, arrayName.length - 1);
}

