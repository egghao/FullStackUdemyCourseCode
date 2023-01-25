function isAllUpperCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  if (input.length <= 0) {
    return false;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i].toUpperCase() != input[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAllUpperCase("ADSF"));
