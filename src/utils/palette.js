export function generatePalette(start, end, steps) {
  const palette = [];
  for (let x = 0; x < steps; x++) {
    const row = [];
    for (let y = 0; y < steps; y++) {
      row.push("#000000");
    }
    palette.push(row);
  }
  return palette;
}
