function stars2(cnt) {
  for (let i = 1; i <= cnt; i++) {
    let output = "";
    for (let j = 0; j < i; j++) {
      output += "*";
    }
    output += "\n";
    console.log(output);
  }

  for (let i = cnt - 1; i >= 1; i--) {
    let output = "";
    for (let j = 0; j < i; j++) {
      output += "*";
    }
    output += "\n";
    console.log(output);
  }
}

stars2(4);
