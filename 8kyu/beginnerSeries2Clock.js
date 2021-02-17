function past(h, m, s) {
  let milliseconds = 0.001;
  if (0 <= h <= 23 && 0 <= m <= 59 && 0 <= s <= 59) {
    console.log(4);
  }
}

function past2(h, m, s) {
  let milliseconds = 0.001;
  if (h >= 0 && h <= 23 && 0 <= m && m <= 59 && 0 <= s && s <= 59) {
  }
}

console.log(past2(0, 1, 1));
