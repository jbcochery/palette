import React, { useState } from "react";

import { generatePalette } from "../utils/palette";

export default function App() {
  const [start, setStart] = useState("#ff0000");
  const [end, setEnd] = useState("#ffff00");
  const [palette, setPalette] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    setPalette(generatePalette(start, end, 10));
  }

  return (
    <div className="wrapper">
      <div className="settings">
        <h1>Palette 🎨</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="start">First color</label>
            <input
              type="color"
              id="start"
              value={start}
              onChange={({ target: { value } }) => setStart(value)}
            />
          </div>
          <div>
            <label htmlFor="end">Second color</label>
            <input
              type="color"
              id="end"
              value={end}
              onChange={({ target: { value } }) => setEnd(value)}
            />
          </div>
          <button>Draw</button>
        </form>
      </div>
      <div className="result">{palette && <Palette palette={palette} />}</div>
    </div>
  );
}

function Palette({ palette }) {
  return (
    <>
      {palette.map((row, x) => (
        <div className="row" key={x}>
          {row.map((color, y) => (
            <div
              className="color"
              style={{ backgroundColor: color }}
              key={y}
            ></div>
          ))}
        </div>
      ))}
    </>
  );
}
