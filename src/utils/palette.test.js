import { generatePalette } from "./palette";

it("generates a palette filled with #000000", () => {
  expect(generatePalette("#ff0000", "#ffff00", 4)).toMatchSnapshot();
});
