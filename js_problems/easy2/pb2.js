function swap(input) {
  if (typeof input !== "string") {
    return;
  }
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].toUpperCase() == input[i]) {
      // Uppercase
      output += input[i].toLowerCase();
    } else {
      output += input[i].toUpperCase();
    }
  }
  return output;
}

console.log(swap("Love you."));
