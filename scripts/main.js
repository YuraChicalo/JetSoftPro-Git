// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

const exponentLoop = (x,n) => {
    if (n == 0) return 1

    let result = 1;
    for(let i = 1; i <= n; i++ ){
        result *= x;
    }
    return result
}
console.log(exponentLoop(2,3))

const exponentRecursion = (x,n) => {
    if (n==0) return 1
    if (n != 1) {
        return x *= exponentRecursion(x,n - 1);
    } else {
        return x;
    }
}
console.log( exponentRecursion(2,1));

// 2. Write functions min and max that will find min and max number in array using apply

// let arr = [12,8,43,112,23,11,15,88];
//
// function maxNum(array) {
//     let max = arr[0];
//    for (let i = 0; i < array.length; i++) {
//       if (array[i] > max) max = array[i];
//    }
//    return max;
// }
// let max = maxNum(arr);
// console.log(`max number is ${max}`);
//
//
// function minNum(array) {
//     let min = arr[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) min = array[i];
//     }
//     return min;
// }
// let min = minNum(arr);
// console.log(`min number is ${min}`);


// 3. write a function displayCarDetails that will receive as argument ownerName
//    and return a string with car registration number, brand and color.
//    Please make examples for three different cars

// function displayCarDetails(ownerName) {
//     return `Car registration: ${this.registrationNumber}, brand: ${this.brand}, color: ${this.color}`
// }
// const car1 = {
//     registrationNumber: 1992,
//     brand: 'Mercedes',
//     color: 'red'
// }
// const car2 = {
//     registrationNumber: 2001,
//     brand: 'BMW',
//     color: 'white'
// }
// const car3 = {
//     registrationNumber: 2010,
//     brand: 'Volvo',
//     color: 'black'
// }
// let result1 = displayCarDetails.call(car1, 'vasyl')
// console.log(result1)
//
// let result2 = displayCarDetails.call(car2, 'marko')
// console.log(result2)
//
// let result3 = displayCarDetails.call(car3, 'yurii')
// console.log(result3)

// don't understand why do we use ownerName if it is not used anywhere

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that

// function greet () {
//   if (this.name == 'amy' ) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// const amy = {name: 'amy'}
// let result = greet.call(amy)
// console.log(result)
//
// // 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// // but it doesn’t do what we expect - fix that(find two solutions)
//
// for (let i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

// this code works good
