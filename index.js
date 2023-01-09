"use strict";
function moveZeros(arr) {
    const result = arr.filter((x) => x !== 0);
    const zeros = arr.filter((x) => x === 0);
    return result.concat(zeros);
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
