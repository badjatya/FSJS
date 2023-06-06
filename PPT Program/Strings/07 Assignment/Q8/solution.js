function checkStraightLine(coordinates) {
  if (coordinates.length <= 2) {
    return true;
  }

  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  const slope = (y1 - y0) / (x1 - x0);

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    const expectedY = y0 + slope * (x - x0);

    if (y !== expectedY) {
      return false;
    }
  }

  return true;
}