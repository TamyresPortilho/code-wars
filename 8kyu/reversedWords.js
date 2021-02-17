const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(
  reverseWords("The greatest victory is that which requires no battle")
);

// OR

// const reverseWords = (str) => {
//   const words = str.split(" ").reverse();
//   let string = "";
//   for (word in words) string += (word > 0 ? " " : "") + words[word];
//   return string;
// };
// console.log(
//   reverseWords("The greatest victory is that which requires no battle")
// );
