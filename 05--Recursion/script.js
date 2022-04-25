// ! Working on browsers call stack field
// function takeShower() {
//     return "Shwoering";
// }

// function eatBreakfast() {
//     let meal = cookFood();
//     return `Eating ${meal}`;
// }

// function cookFood() {
//     let items = ["Oatmeal", "Eggs", "Protein Shake"];
//     return items[Math.floor(Math.random() * items.length)];
// }

// function wakeUp() {
//     takeShower();
//     eatBreakfast();
//     console.log("ready to go to work");
// }

// wakeUp();

// !  Writing first recursive function

// function countDown(num) {
//     if (num <= 0) {
//         console.log("All is done");
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

// countDown(5);

// function sumRange(num) {
//     if (num === 1) return 1;
//     return num + sumRange(num - 1);
// }

// sumRange(4);

// ^ writing a loop giving factorial number 5(5*4*3*2*1)
// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i;
//     }
//     return total;
// }
// factorial(5);

// ^ factorial with recursion
// function factorial(num) {
//     if (num === 1) return 1;
//     return num * factorial(num - 1);
// }

// factorial(5);

// ^  Recursion helper method
// function collectOddValues(arr) {
//     let result = [];
//     function helper(helperInput) {
//         if (helperInput.length === 0) {
//             return;
//         }
//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0]);
//         }
//         helper(helperInput.slice(1));
//     }
//     helper(arr);
//     return result;
// }
// collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// ^  Pure Recursion

function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
