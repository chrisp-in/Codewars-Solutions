function collision(x1, y1, radius1, x2, y2, radius2) {
  const dx = Math.pow((x2 - x1), 2);
  const dy = Math.pow((y2 - y1), 2);
  const distance = Math.sqrt(dx + dy);
  const sumOfRadii = radius1 + radius2;
  return distance <= sumOfRadii ? true : false;
}
collision(1, 1, 10, -10.1, 1.1, 1);