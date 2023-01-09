function moveZeros(arr: any[]): any[] {
  const result = arr.filter((x) => x !== 0);
  const zeros = arr.filter((x) => x === 0);
  return result.concat(zeros);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// returns[false, 1, 1, 2, 1, 3, “a”, 0, 0]
