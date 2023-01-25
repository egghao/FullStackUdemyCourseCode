function stars(cnt) {
  for (let i = 1; i <= cnt; i++) {
    let output = "";
    for (let j = 0; j < i; j++) {
      output += "*";
    }
    output += "\n";
    console.log(output);
  }
}

stars(1);
stars(4);
