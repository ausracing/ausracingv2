import React from 'react';

interface SpacerProps {
  height?: string | number;
  width?: string | number;
}

const Spacer: React.FC<SpacerProps> = ({ height = '1rem', width = 'auto' }) => {
  return (
    <div
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: typeof width === 'number' ? `${width}px` : width,
        flexShrink: 0,
        backgroundColor: 'black',
      }}
    />
  );
};

export default Spacer;