import React, { useEffect, useState } from 'react';
import { databases, account } from '../appwrite/appwriteConfig';
import { Query } from 'appwrite';
import conf from '../conf/conf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

function Favourite() {
  const [favourites, setFavourites] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isFavourite, setIsFavourite] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await account.get();
        setUserId(response.$id);
      } catch (error) {
        console.error('Failed to get user:', error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const fetchFavourites = async () => {
      if (!userId) return;

      try {
        const response = await databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, [
          Query.equal('user_id', userId)
        ]);
        setFavourites(response.documents);
      } catch (error) {
        console.error('Failed to fetch favourite recipes:', error);
      }
    };

    fetchFavourites();
  }, [userId]);

  const handleRemoveFavourite = async (recipeId) => {
    if (!userId) return;

    try {
      await databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, recipeId);
      setFavourites(favourites.filter(recipe => recipe.$id !== recipeId));
    } catch (error) {
      console.error('Failed to remove favourite recipe:', error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center align-top pl-20  mt-20 bg-custom-black">
      {favourites.map((recipe) => (
        <div key={recipe.$id} className="relative m-2 p-4 bg-dark-gray rounded-3xl flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs text-white">
          <img
            src={recipe.img_src}
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">{recipe.name}</h1>
            <button
              type="button"
              className="w-32 mt-4 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View Recipe
            </button>
            <button
              type="button"
              className="absolute top-2 right-2 w-10 h-10 rounded-full bg-black text-white shadow-sm hover:bg-black/80 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => handleRemoveFavourite(recipe.$id)}
            >
              <FontAwesomeIcon
                icon={isFavourite ? faHeartSolid : faHeartRegular}
                className={isFavourite ? 'text-red-500' : 'text-white'}
                size="lg"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favourite;
