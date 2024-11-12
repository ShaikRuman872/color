// src/App.js
import React, { useState, useEffect } from 'react';
import ColorPalette from './ColorPalette';
import SavedPalettes from './SavedPalettes';

function App() {
  const [savedPalettes, setSavedPalettes] = useState([]);

  useEffect(() => {
    const palettes = JSON.parse(localStorage.getItem('palettes')) || [];
    setSavedPalettes(palettes);
  }, []);

  function savePalette(colors) {
    const updatedPalettes = [...savedPalettes, colors];
    setSavedPalettes(updatedPalettes);
    localStorage.setItem('palettes', JSON.stringify(updatedPalettes));
  }

  
  

  return (
    <div>
      <h1>Color Palette Generator</h1>
      <ColorPalette onSave={savePalette} />
      <SavedPalettes palettes={savedPalettes} />
    </div>
  );
}

export default App;
