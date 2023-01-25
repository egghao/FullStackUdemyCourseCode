function position(input) {
  if (typeof input !== "string") {
    console.log(-1);
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i].toUpperCase() == input[i]) {
      console.log(input[i] + " " + i);
      return;
    }
  }
  console.log(-1);
}

position("abCD");
