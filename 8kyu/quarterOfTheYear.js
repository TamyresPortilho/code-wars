const quarterOf = (month) => {
  //Your code here
  if (month <= 3) {
    return "First quarter";
  } else if (month > 3 && month <= 6) {
    return "Second quarter";
  } else if (month > 6 && month <= 9) {
    return "Third quarter";
  } else if (month > 9 && month <= 12) {
    return "Fourth quarter";
  } else {
    return "Error";
  }
};
console.log(quarterOf(2));
console.log(quarterOf(6));
console.log(quarterOf(9));
console.log(quarterOf(11));
