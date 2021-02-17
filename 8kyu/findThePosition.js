function position(letter) {
  let count = 1;
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    if (i === letter) {
      return count;
    }
    count++;
  }
}

console.log(position("z".charCodeAt(0)));
