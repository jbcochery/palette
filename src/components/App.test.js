import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<App />);
  });

  it("renders a title and a form", () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  describe("when the form is changed and submitted", () => {
    beforeEach(() => {
      fireEvent.change(wrapper.getByLabelText("First color"), {
        target: { value: "#cccccc" },
      });
      fireEvent.change(wrapper.getByLabelText("Second color"), {
        target: { value: "#abcdef" },
      });
      fireEvent.click(wrapper.getByText("Draw"));
    });

    it("renders a palette", () => {
      expect(wrapper.container).toMatchSnapshot();
    });
  });
});
