import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={handleButtonClick}
        style={{ width: '150px',height: '50px',backgroundColor: selectedColor || 'inherit' }}
      >
        Pick a color
      </button>
      {isColorListVisible && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && <p>You Selected Color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
