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

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState({});

  const handleLikeClick = async(recipeId) => {
    setLikedRecipes((prevLikedRecipes) => {
      const updatedLikedRecipes = {
        ...prevLikedRecipes,

        [recipeId]: !prevLikedRecipes[recipeId],
      };

      if (updatedLikedRecipes[recipeId]) {
        toast.success("Added To Wishlist");

        axios.post(
          `${server}/favourite/addfavs`,
          { recipeId },{withCredentials:true})

            .then((response) => {
              console.log("Added to wishlist", response.data);
            })
            .catch((error) => {
              console.error("Error adding to wishlist:", error);
            })
        
      } else {
        toast.error("Removed from Wishlist");
        axios.delete(`${server}/favourite/${recipeId}`,{withCredentials:true})
        .then((response)=>{
          console.log("Removed from wishlist",response.data);
        })
        .catch((error)=>{

          console.error("Error removing from wishlist:", error);
          toast.error("Error removing from wishlist");
        });
      }
      return updatedLikedRecipes;
    });
  };

  useEffect(() => {
    axios
      .get(`${server}/recipe/allrecipe`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("API Response:", res.data);
        const recipesWithImageDataUrls = res.data.recipe.map(async (recipe) => {
          const imageDataUrl = await arrayBufferToBase64(recipe.image.data);
          return {
            ...recipe,
            image: imageDataUrl,
          };
        });
        Promise.all(recipesWithImageDataUrls).then(setRecipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        toast.error(error.response.data.message);
      });
  }, []);

  console.log("Recipes:", recipes);

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

  return (
    <div>
      <Navbar />
      <section id="ten" className="wrapperx style26">
        <div className="recipe-banner">
          <h1>RECIPES</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
          {recipes.map((recipe) => renderRecipeCard(recipe, handleLikeClick, false))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipe;
