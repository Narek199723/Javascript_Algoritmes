"use strict";

// !  THe Big O of Objects
// ^  What is Objects
// * Objects are unordered data structures, everything is stored in key value pairs
// *  Example
let instructor = {
  firstName: "Jane",
  isInstructor: true,
  favoriteNumbers: [1.2, 3, 4],
};

// ^  When to use Objects?
// *    When you don't need order
// *    When you need fast access/insertion and removal
// *

// *  When we want to find out if instructor object has a true value we can use one of the object's method
// console.log(Object.keys(instructor));
// console.log(Object.entries(instructor));
// console.log(Object.values(instructor));
// console.log(instructor.hasOwnProperty("firstName"));

// !  When are Arrays Slow
// ^  What is Arrays ?
// * First they are ordered
// * so because they are ordered they have index, specific to only them
// *
// * Example
// let names = ["Michael", "Melissa", "Andrea"];
// let values = [true, {}, [], 2, "awesome"];

// ^  When to use Arrays
// *  when we need order
// * when we need fast access/insertion and removal

// ^ When we are inserting something into the array
// *  If we are adding something on the end of the array , there is nothing is changing because it is just adding one index to that element in the index
// *  THis function will add Jane from the end of the array which means just only 1 index , only one
// names.push("Jane");

// *  Something is messing up when we insert element from the beginning of the array, because when we add element from the beginning of the array the indexes of the array is messing up ,so it is reIndexing all the array

// * Also when it is removing from the beginning of the array it also changes the index , so push and pop is a lot faster than shift and unshift, unless we are working with empty array

// !  Big o of Array Methods

// *  push --> adding from the end
// *  pop  --> removing from the end
// *  shift -->  from the end
// *  unshift --> adding from the beginning
// *  concat --> adding array to an array from the end  
// *  slice --> 
// *  sort
// *  forEach/map/filter/reduce/etc

