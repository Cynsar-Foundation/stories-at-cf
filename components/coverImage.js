import React from 'react';

const CoverImageUrl = ({ imageUrl }) => {
  return (
    <div
      className="w-1/2 sticky top-0 h-full"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default CoverImageUrl;
