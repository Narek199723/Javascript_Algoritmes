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

// !  Logarithms
// *  Sometimes big O expressions involve more complex mathematical expressions
// *  One that appears more often than you might like is the logarithm

// ^ What is Logarithm ? what is a log?
// *  log2(8)==3, this means that what to square with, what power of 2 will give us 8
// *  so log2(8) = 3 --> 2**3=8
// *  log2(value)=exponent --> 2**exponent = value


// ^  THe logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one
// * Example  So if we have log(8) this = 8/2=4 || 4/2=2 || 2/2=1 so log(8)=3 , because we should have divided 8 by 2 3 times to get the number 1
// * Example 25- 25/2=12.5|| 12.5/2=6.25 || 6.25/2=3.125 || 3.125/2=1.5625|| 1.5625/2=0.78125 so log(25)=4.64 approximately

// *  1.  To analyze the performance of an algorithm , we use Big O Notation
// *  2.  Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
// *  3.  Big O notation doesn't care about precision, only about general trends( linear? quadratic? constant? )
// *  4.  The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
