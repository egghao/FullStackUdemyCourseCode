function findSmallerCount(lis, num) {
  let cnt = 0;
  for (let i = 0; i < lis.length; i++) {
    if (lis[i] < num) {
      cnt += 1;
    }
  }
  return cnt;
}

console.log(findSmallerCount([1, 2, 3, 4, 5], 0));
