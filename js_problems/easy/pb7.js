function findSmallerTotal(lis, num) {
  let total = 0;
  for (let i = 0; i < lis.length; i++) {
    if (lis[i] < num) {
      total += lis[i];
    }
  }
  return total;
}

findSmallerTotal([1, 2, 3], 1); // returns 0
findSmallerTotal([3, 2, 5, 8, 7], 999); // returns 25
findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0
