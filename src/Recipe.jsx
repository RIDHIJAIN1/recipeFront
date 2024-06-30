import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { server } from "./main";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { error } from "jquery";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState({});

  const handleLikeClick = (recipeId) => {
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
            {recipes.map((recipe) => (
              <div key={recipe._id} className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={recipe.image}
                      className="card-img-top"
                      alt="Recipe"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">
                      {recipe.ingredients.length > 180
                        ? `${recipe.ingredients.slice(0, 180)}...`
                        : recipe.ingredients}
                    </p>

                    {/* <p className="card-text-desc">{recipe.description}</p> */}
                    <Link to={`/recipe/${recipe._id}`} className="btn btn-dark">
                      Watch More
                    </Link>
                    <div
                      className="wishlist"
                      onClick={() => handleLikeClick(recipe._id)}
                    >
                      <FaRegHeart
                        className="heartIcon"
                        style={{
                          fontSize: "30px",
                          color: likedRecipes[recipe._id] ? "red" : "black",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipe;
