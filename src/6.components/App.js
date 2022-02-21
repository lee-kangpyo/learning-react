import colorData from './color-data.json'
import React, { useState } from "react";
import ColorList from './colorList'

function App() {
  const [colors, setColors] = useState(colorData.colors)
  return (
    <ColorList
      colors={colors}
      onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
      }} />
  );
}

export default App;
