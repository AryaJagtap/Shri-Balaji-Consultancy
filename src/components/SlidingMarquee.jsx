import React from 'react';

export default function SlidingMarquee({ items, renderItem, reverse = false, speed = '35s' }) {
  // Duplicate array 3 times for seamless infinite continuous loop
  const seamlessItems = [...items, ...items, ...items];

  return (
    <div className="slider-container">
      <div 
        className={`slider-track ${reverse ? 'slider-track-reverse' : ''}`}
        style={{ animationDuration: speed }}
      >
        {seamlessItems.map((item, idx) => (
          <React.Fragment key={idx}>
            {renderItem(item, idx)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
