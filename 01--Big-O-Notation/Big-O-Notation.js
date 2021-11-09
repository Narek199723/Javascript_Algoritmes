"use strict";

// !  Introduction to Big O notation

// * Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. ... In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.

// ^ Imagine that we have two valid way to solve the occurred problem , how we can determine which one is the best ? that's what big o notation is all about , Big o notation is about finding out analyzing two pieces of code and comparing with each other realizing which one can be the best solution

// % Example
// *  Write a function that accepts a string input and returns a reversed copy

// * Let's say if we have a way of describing the code giving a mark like(the code is great,or pretty good, or ok,or awful) , and also we can give a numeric mark, let's say (1-10)

// * 1. It is important to have a precise vocabulary to talk about how our code performs
// * 2. useful for discussing trade-offs between different approaches
// * 3. When your code slows down or crashes,identifying parts of the code that are inefficient can help us find pain points in our applications

// !  Timing our code

// *  Suppose we want to write a function that calculates the sum of all numbers from 1 up to(including 1,until n) some number n

// ^ First solution

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(6));

// ^  Second solution
function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo(3));

// *  So which one is better approach?
// *  First we have to find out what does better mean? 
// * We mean faster? or less memory-intensive? or more readable?