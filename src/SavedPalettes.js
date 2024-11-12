// src/SavedPalettes.js
import React from 'react';

function SavedPalettes({ palettes }) {
  return (
    <div>
      <h2>Saved Palettes</h2>
      {palettes.map((palette, index) => (
        <div key={index} className="saved-palette">
          {palette.map((color, i) => (
            <div key={i} className="color-block" style={{ backgroundColor: color }}>
              <span>{color}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SavedPalettes;
