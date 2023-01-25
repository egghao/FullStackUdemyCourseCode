function reverse(input) {
  if (typeof input !== "string") {
    return;
  }
  let output = "";
  for (let i = input.length - 1; i >= 0; i--) {
    output += input[i];
  }

  return output;
}

let testStr = "I am a good guy.";
console.log(reverse(testStr));
