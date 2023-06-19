import React from 'react';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Select a Color by Clicking the button</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
