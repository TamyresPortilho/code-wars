const arr = (N) => [
  ...(function* () {
    let i = 0;
    while (i < N) yield i++;
  })(),
];

console.log(arr(5));
