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
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error("No token found");
      }
      const res = await axios.get(`${server}/favourite/getfavourites`, {
        
        headers:{
          Authorization: `Bearer ${token}`
        },
        withCredentials: true });

      if (res.data && res.data.recipes) {
        const recipesWithImages = await Promise.all(
          res.data.recipes.map(async (recipe) => {
           
            return {
              ...recipe,
              image: `http://localhost:4000${recipe.image}`,
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



  const handleDeleteClick = async (recipeId) => {
 
    const token = localStorage.getItem('authToken');
    axios.delete(`${server}/favourite/${recipeId}`,{
      
      headers:{
        Authorization: `Bearer ${token}`
      },
      
      withCredentials:true})
    .then((response)=>{
      toast.error("Removed from Wishlist");
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
         <div className="favourite-cover"></div>
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
