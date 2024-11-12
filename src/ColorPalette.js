// src/ColorPalette.js
import React, { useState } from 'react';

function ColorPalette({ onSave }) {
  const [colors, setColors] = useState(generateRandomColors());

  function generateRandomColors() {
    return Array.from({ length: 5 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }

  function handleGenerate() {
    setColors(generateRandomColors());
  }

  return (
    <div>
      <div className="palette">
        {colors.map((color, index) => (
          <div key={index} 
             className="color-block" 
             style={{ backgroundColor: color }}
             onClick={() => navigator.clipboard.writeText(color)} >
            <span>{color}</span>
          </div>
        ))}
      </div>
      <button onClick={handleGenerate}>Generate New Palette</button>
      <button onClick={() => onSave(colors)}>Save Palette</button>
    </div>
  );
}

export default ColorPalette;
