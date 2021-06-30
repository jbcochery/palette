import chroma from "chroma-js";

function generateSeries(start, end, steps) {
  const scale = chroma.scale([start, end]);
  const row = [];
  for (let i = 0; i < steps; i++) {
    row.push(scale(i / (steps - 1)).hex());
  }
  return row;
}

export function generatePalette(start, end, steps) {
  const palette = [];

  const firstColumn = generateSeries(start, "#ffffff", steps);
  const lastColumn = generateSeries("#000000", end, steps);

  for (let i = 0; i < steps; i++) {
    palette.push(generateSeries(firstColumn[i], lastColumn[i], steps));
  }

  return palette;
}
