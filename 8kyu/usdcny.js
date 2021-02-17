const cny = 6.75;
function usdcny(usd) {
  return (usd * cny).toFixed(2) + " Chinese Yuan";
}
console.log(usdcny(15));
