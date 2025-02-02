// remove odd number
function removeOddnumbers(arr: number[]): number[] {
    const evenNumbers: number[] = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

let array: number[] = [1,2,3,4,5,6,7,8,9,10];
let arraygenap: number[] = removeOddnumbers(array);
console.log(arraygenap);



// versi js
// function removeOddnumbers(arr) {
//     const evenNumbers = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenNumbers.push(arr[i]);
//         }
//     }
//     return evenNumbers;
// }

// let array = [1,2,3,4,5,6,7,8,9,10];
// let arraygenap = removeOddnumbers(array);
// console.log(arraygenap);