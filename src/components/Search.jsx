import React, { useState, useEffect } from 'react';
import RecipeApp from './RecipeApp';
import CookingAnimation from './Preloader/Preloader';
import { useNavigate } from 'react-router-dom';
import images from '../assets/img1.jpg';

function ParentComponent() {
  const [dish, setDish] = useState('');
  const [submittedDish, setSubmittedDish] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setDish(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedDish(dish);
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  useEffect(() => {
    if (submittedDish) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [submittedDish]);

  const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  return (
    <>
      <div
        className="flex flex-col justify-center items-center mt-4 md:mt-8 lg:mt-12 ml-12 md:ml-20 lg:ml-32  bg-no-repeat relative"
      >
        {/* Profile Picture */}
        <div className="absolute top-1 right-4 md:top-3 md:right-6 lg:top-4 lg:right-8">
          <img
            src={images} // Replace with the actual path to the profile picture
            alt="Profile"
            className="h-14 w-14 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
        </div>


        {/* Background text */}
        <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-300 opacity-30" style={{ top: '50%', transform: 'translateY(-50%)' }}>
          Healthy Food
        </div>
        <form onSubmit={handleSubmit} className="w-90 max-w-md z-10 px-4 sm:px-6 md:px-8 lg:px-10">
          <input
            className="w-full h-10 px-4 sm:px-6 md:px-8 lg:px-10 border-2 border-yellow-400 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 ease-in-out"
            placeholder="Recipes, ingredients, trends"
            type="text"
            value={dish}
            onChange={handleInputChange}
          />
        </form>
        <div>
          {loading ? (
            <CookingAnimation />
          ) : (
            submittedDish && (
              <RecipeApp dish={submittedDish.toLowerCase()} url={`${BASE_URL}${submittedDish.toLowerCase()}`} />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default ParentComponent;
