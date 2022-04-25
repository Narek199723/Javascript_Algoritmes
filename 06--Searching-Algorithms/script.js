// function checkIncludes(arr, el) {
//     const arrEl = arr.find((num) => num === el);
//     return arr.indexOf(arrEl);
// }
// const val = checkIncludes([1, 2, 3, 4, 5], 6);

// console.log(val);

// ! Linear Search Big o
// ^ Binary search is a much faster form of search
// ^ Rather than eliminating one element at a time you can eliminate half of the remaining elements at a time
// ^ Binary search only works on sorted arrays

// const sortedArr = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
// ];

// const binarySearch = (arr, elem) => {
//     let start = arr[0];
//     let end = arr[arr.length - 1];
//     let middle = Math.trunc((start + end) / 2);

//     while (arr[middle] !== elem && start <= end) {
//         if (elem < arr[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.trunc((start + end) / 2);
//     }
//     if (arr[middle] === elem) {
//         return middle;
//     }
//     return -1;
// };
// const val = binarySearch(sortedArr, 9);

//^ Naive String Search Algorithm
const naiveSearch = (long, short) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
};
const foundStr = naiveSearch("lorie loled lololed", "pol");

console.log(foundStr);
