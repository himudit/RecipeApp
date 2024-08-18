import React from 'react';
import "./ViewCard.css"

function ViewCard({ id,recipe, name, img_src, f1 }) {
    return (
        // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        //     <div className="bg-white rounded-md shadow-md w-full max-w-md p-4 relative">
        //         <button
        //             className="absolute top-2 right-2 text-black"
        //             onClick={f1}
        //         >
        //             ❌
        //         </button>
                
        //         <img src={img_src} className="h-[200px] w-full rounded-md object-cover my-4" />
        //     </div>
        //     <div className="top-2 right-2 text-black">
        //         {/* <h1>{recipe.strMeal}</h1> */}
        //         <h2 className="text-xl font-semibold text-red-600">{name}</h2>
        //     </div>
        // </div>
        <>
        <div className="container">
            <div className="left">
                <img src={img_src}></img>
            </div>
            <div className="right">
                <h1>{name}</h1>
                <ul>
                    <li>{recipe.strInstructions}
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default ViewCard;
