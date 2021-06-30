import { generatePalette } from "./palette";

it("generates a palette", () => {
  expect(generatePalette("#ff0000", "#ffff00", 4)).toMatchSnapshot();
});
