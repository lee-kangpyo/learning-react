import colorData from './color-data.json'
import React, { useState } from "react";
import ColorList from './colorList'

function App() {
  const [colors] = useState(colorData.colors)
  return (
    <ColorList colors={colors} />
  );
}

export default App;
