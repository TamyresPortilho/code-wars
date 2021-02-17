function iceBrickVolume(radius, bottleLength, rimLength) {
  if (radius > 0 && bottleLength > 0 && rimLength < bottleLength) {
    let brickHeight = bottleLength - rimLength;
    return brickHeight * 2 * Math.pow(radius, 2);
  }
}

console.log(iceBrickVolume(5, 30, 7));
