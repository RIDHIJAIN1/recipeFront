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

    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error("No token found");
      return;
    }
    setLikedRecipes((prevLikedRecipes) => {
      const updatedLikedRecipes = {
        ...prevLikedRecipes,

        [recipeId]: !prevLikedRecipes[recipeId],
      };

      if (updatedLikedRecipes[recipeId]) {
        toast.success("Added To Wishlist");

        axios.post(
          `${server}/favourite/addfavs`,
          { recipeId },{
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            
            withCredentials:true})

            .then((response) => {
              console.log("Added to wishlist", response.data);
            })
            .catch((error) => {
              console.error("Error adding to wishlist:", error);
            })
        
      } else {
        toast.error("Removed from Wishlist");
        axios.delete(`${server}/favourite/${recipeId}`,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          
          withCredentials:true})
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
        
          return {
            ...recipe,
            image: `http://localhost:4000${recipe.image}`,
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



  return (
    
    <div>
   <Navbar/>
      <section id="ten" className="wrapperx style26">
      <div className="recipe-banner">
      <div className="recipe-cover"><h1>RECIPES</h1></div>
    </div>
        <div className="container-fluid">
          <div className="row">
           <br></br>
          {recipes.map((recipe) => renderRecipeCard(recipe, handleLikeClick, false))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipe;
