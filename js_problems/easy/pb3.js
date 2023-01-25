function isUpperCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  if (input.length == 0) {
    return false;
  }
  return input[0].toUpperCase() == input[0];
}

console.log(isUpperCase("Aaasadf"));
