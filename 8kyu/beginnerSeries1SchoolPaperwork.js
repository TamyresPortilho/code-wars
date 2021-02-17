function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  return m * n;
}
console.log(paperwork(5, 5));

// Or
// const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : m * n);
// console.log(paperwork(5, 5));
