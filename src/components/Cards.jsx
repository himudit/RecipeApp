import React, { useState, useEffect } from 'react'
import ViewCard from './ViewCard';
import { FaHeart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addFavourite } from '../redux/favourite/favouriteSlice';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import Favourite from './Favourite';
import conf from '../conf/conf'
import { databases, account } from '../appwrite/appwriteConfig';
import { v4 as uuidv4 } from 'uuid'

function Cards({ id, recipe, name, img_src }) {
    const [viewRecipe, setViewRecipe] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await account.get(); // Get the logged-in user's information
                setUserId(response.$id); // Set the user ID
            } catch (error) {
                console.error('Failed to get user:', error);
            }
        };

        getUser();
    }, []);

    // adding to Recipe(favorite)
    const handleAddFavourite = (e) => {
        if (!userId) return;

        setIsFavourite(!isFavourite);
        e.preventDefault();
        const documentData = {
            user_id: userId, 
            id: String(id),
            name: String(name),
            img_src: String(img_src)
        };

        const promise = databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, uuidv4(), documentData);

        promise.then(
            function (response) {
                console.log(response);
            },
            function (error) {
                console.log(error)
            }
        );
    };


    // adding to history
    const handleAddHistory = (e) => {
        if (!userId) return;
        e.preventDefault();
        const documentData = {
            user_id: userId,
            id: String(id),
            name: String(name),
            img_src: String(img_src)
        };
        const promise = databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollection2Id, uuidv4(), documentData);
        promise.then(
            function (response) {
                console.log(response);
            },
            function (error) {
                console.log(error)
            }
        );
    }

    const f1 = () => {
        if (viewRecipe == false) {
            setViewRecipe(true);
        } else {
            setViewRecipe(false);
        }
    }
    return (
        <div className="relative m-2 p-4 bg-dark-gray rounded-3xl flex flex-col items-center  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs text-white">
            <img
                src={img_src}
                className="h-[200px] w-full rounded-md object-cover "
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold">{name}</h1>
                <button
                    type="button"
                    className="w-32
                    mt-4 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={handleAddHistory}
                >
                    View Recipe
                </button >
                <button
                    type="button"
                    className="absolute top-2 right-2 w-10 h-10 rounded-full bg-black text-white shadow-sm hover:bg-black/80 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={handleAddFavourite}
                >
                    <FontAwesomeIcon
                        icon={isFavourite ? faHeartSolid : faHeartRegular}
                        className={isFavourite ? 'text-red-500' : 'text-white'}
                        size="lg"
                    />
                </button >
                {viewRecipe && <ViewCard id={id} recipe={recipe} name={name} img_src={img_src} f1={f1} />}
            </div>
        </div>
    )
}

export default Cards