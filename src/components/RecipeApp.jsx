import React, { useState, useEffect } from 'react'
import Cards from './Cards'
// import './AnimatedBackground.css';
function RecipeApp({ dish, url }) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getRecipe = async (url) => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                setRecipes(data.meals || []);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getRecipe(url);
    }, [url]);

    return (
        <>
            <div className="flex flex-wrap justify-center align-top p-4 ml-8 mt-20 bg-custom-black">
                {recipes.map((recipe) => {
                    return (
                        <Cards
                            key={recipe.idMeal}
                            id={recipe.idMeal}
                            recipe={recipe}
                            name={recipe.strMeal}
                            img_src={recipe.strMealThumb}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default RecipeApp

