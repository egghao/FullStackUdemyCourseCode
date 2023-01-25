function printEvery3() {
  for (let i = 1; i < 89; i++) {
    if (i % 3 != 1) {
      continue;
    }
    console.log(i);
  }
}

printEvery3();
