import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

it("renders a title", () => {
  const wrapper = render(<App />);
  expect(wrapper.container).toMatchSnapshot();
});
