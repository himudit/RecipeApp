import React, { useState, useEffect } from 'react';
import RecipeApp from './RecipeApp';
import CookingAnimation from './Preloader/Preloader';
import { useNavigate } from 'react-router-dom';
import { databases, account, storage } from '../appwrite/appwriteConfig';
import conf from '../conf/conf';
import images from '../assets/img1.jpg';
import { v4 as uuidv4 } from 'uuid';

function ParentComponent() {
  const [dish, setDish] = useState('');
  const [submittedDish, setSubmittedDish] = useState('');
  const [loading, setLoading] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const fileId = uuidv4();
        // Upload the file
        await storage.createFile(conf.appwriteBucketId, fileId, selectedFile);

        // Get the file URL
        const fileUrl = `${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${fileId}/view?project=${conf.appwriteProjectId}&mode=admin`;

        console.log(fileUrl);
        setProfilePictureUrl(fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  // useEffect(() => {
  //   const fetchProfilePictureUrl = async () => {
  //     try {
  //       // Get the document ID from user data (replace with your logic)
  //       const documentId = user?.uid ?? ''; // Assuming you're using Firebase Authentication

  //       if (documentId) {
  //         // Fetch user profile from the database
  //         const userProfile = await databases.getDocument(
  //           conf.appwriteDatabaseId,
  //           conf.appwriteCollectionId,
  //           documentId
  //         );

  //         const fileId = userProfile.profilePictureFileId; // Replace with the actual field name

  //         const url = `https://${conf.appwriteUrl}/v1/storage/buckets/${conf.appwriteBucketId}/files/${fileId}/view`;

  //         setProfilePictureUrl(url);
  //       } else {
  //         console.error('Document ID not found.');
  //       }
  //     } catch (error) {
  //       if (error.code === 'DOCUMENT_NOT_FOUND') {
  //         console.error('User profile document not found.');
  //       } else if (error.code === 'FILE_NOT_FOUND') {
  //         console.error('Profile picture file not found.');
  //       } else {
  //         console.error('Error fetching profile picture URL:', error);
  //       }
  //     }
  //   };

  //   fetchProfilePictureUrl();
  // }, []);

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
      <div className="flex flex-col justify-center items-center mt-4 md:mt-8 lg:mt-12 ml-12 md:ml-20 lg:ml-32 bg-no-repeat relative">
        {/* Profile Picture */}
        <div className="absolute top-1 right-4 md:top-3 md:right-6 lg:top-4 lg:right-8">
          <img
            src={profilePictureUrl} // Fallback to default image if profilePictureUrl is null
            alt="Profile"
            className="h-14 w-14 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-2"
          />
          <button
            onClick={handleUpload}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Upload Profile Picture
          </button>
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
