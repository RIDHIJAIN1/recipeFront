import React, { useEffect, useState } from "react";
import Siderbar from "./Sidebar";
import "../../src/css/Sidebar.css";
import axios from "axios";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
     axios.get(
          "http://localhost:4000/api/v1/recipe/allrecipe"
     )
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

    const DeleteRecipe = async (recipeId) => {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/v1/recipe/${encodeURIComponent(recipeId)}`
        );
        if (response.data.success) {
          setRecipes((prevRecipes) =>
            prevRecipes.filter((recipe) => recipe._id !== recipeId)
          );
        }
      } catch (error) {
        console.error("There was an error deleting the recipe!", error);
      }
    };



  return (
    <div>
      <Siderbar />
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="user-data">
              <div className="user-heading">
                <h1>RECIPE DETAILS</h1>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S No.</th>
                    {/* <th scope="col">Id</th> */}
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col">Description</th>
                    <th scope="col">CookTime</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe, index) => (
                    <tr key={recipe._id}>
                      <th scope="row">{index + 1}</th>
                      {/* <td>{recipe._id}</td> */}
                      <td>{recipe.title}</td>
                      <td> <img src={recipe.image} className="card-img-top" alt="Recipe"  style={{ maxWidth: "200px", maxHeight: "200px" }} /></td>
                      <td>{recipe.ingredients.length > 20
              ? `${recipe.ingredients.slice(0, 20)}...`
              : recipe.ingredients}</td>
                      <td>{recipe.description.length > 180
              ? `${recipe.description.slice(0, 20)}...`
              : recipe.description}</td>
                      <td>{recipe.cookTime}</td>
                      <td>                      
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => DeleteRecipe(recipe._id)}
                        
                        >
                           DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
