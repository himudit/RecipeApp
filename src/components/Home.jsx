import React, { useState, useEffect } from 'react';

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Home() {

  const [display, setDisplay] = useState([]);

  // Time-based greeting
  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 16) {
    greeting = 'Good Afternoon';
  } else if (currentHour >= 16 && currentHour < 19) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Good Night';
  }

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        if (greeting === 'Good Morning') {
          const breakfastRecipes = data.meals.filter(meal =>
            meal.strTags && meal.strTags.toLowerCase().includes('breakfast')
          );
          setDisplay(breakfastRecipes);
        } else {
          setDisplay([]);
        }
        console.log('Filtered Breakfast Recipes:', breakfastRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipe();
  }, []);

  useEffect(() => {
    console.log('Updated Display State:', display);
  }, [display]);

  // Image slider logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? display.length - 1 : prevIndex - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === display.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      {/* Greeting */}
      <h1 className="text-4xl font-bold text-white">{greeting}</h1>

      {/* Breakfast Slider */}
      <div className="relative w-full max-w-2xl mx-auto h-96">
        {display.length > 0 ? (
          display.map((recipe, index) => (
            <div
              key={recipe.idMeal}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={recipe.strMealThumb} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))
        ) : (
          <p className="text-white">No breakfast recipes available.</p>
        )}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Home;
