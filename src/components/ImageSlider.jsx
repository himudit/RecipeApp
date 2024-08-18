import React from 'react';
import '../index.css'; // Make sure to import the Tailwind CSS file

const images = [
  'https:\/\/www.themealdb.com\/images\/media\/meals\/hx335q1619789561.jpg',
  'https:\/\/www.themealdb.com\/images\/media\/meals\/rwuyqx1511383174.jpg',
  'https:\/\/www.themealdb.com\/images\/media\/meals\/tqrrsq1511723764.jpg',
];

const ImageSlider = () => {
  return (
    <div className="relative overflow-hidden w-full h-64">
      <div className="flex animate-slide">
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
