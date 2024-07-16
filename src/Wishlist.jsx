import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { server } from "./main";
import toast from "react-hot-toast";

import { renderRecipeCard } from "./RecipeCard";

const FavouriteRecipes = () => {
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  useEffect(() => {
    fetchFavouriteRecipes();
  }, []);

  const fetchFavouriteRecipes = async () => {
    try {
      const res = await axios.get(`${server}/favourite/getfavourites`, { withCredentials: true });
      console.log("API Response:", res.data); // Debug log
      if (res.data && res.data.recipes) {
        const recipesWithImages = await Promise.all(
          res.data.recipes.map(async (recipe) => {
            const imageDataUrl = await arrayBufferToBase64(recipe.image.data);
            return {
              ...recipe,
              image: imageDataUrl,
            };
          })
        );
        setFavouriteRecipes(recipesWithImages);
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      toast.error("Error fetching favourite recipes");
    }
  };

  const arrayBufferToBase64 = (buffer) => {
    return new Promise((resolve, reject) => {
      const blob = new Blob([new Uint8Array(buffer.data)], {
        type: buffer.contentType,
      });
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleDeleteClick = async (recipeId) => {
    toast.error("Removed from Wishlist");
    axios.delete(`${server}/favourite/${recipeId}`,{withCredentials:true})
    .then((response)=>{
      console.log("Removed from wishlist",response.data);
      setFavouriteRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe._id !== recipeId));
    })
    .catch((error)=>{

      console.error("Error removing from wishlist:", error);
      toast.error("Error removing from wishlist");
    });
  };

  return (
    <div>
      <Navbar />
      <section id="ten" className="wrapperx style26">
        <div className="recipe-banner">
          <h1>FAVOURITE RECIPES</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
          {favouriteRecipes.length > 0 ? (
              favouriteRecipes.map((recipe) => renderRecipeCard(recipe, null, true, handleDeleteClick))
            ) : (
              <p>No favourite recipes found.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FavouriteRecipes;
