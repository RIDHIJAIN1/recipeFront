import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from './main';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './css/main.css'; 
// import image4 from './images/Kalyani.jpg'; 
import './css/single.css' 

const Single = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error("No token found");
        }

        const res = await axios.get(`${server}/recipe/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true,
        });

        if (res.data && res.data.recipe) {
          const recipeData = res.data.recipe;
          const recipeWithImage = {
            ...recipeData,
            image: `http://localhost:4000${recipeData.image}`
          };
          setRecipe(recipeWithImage);
        } else {
          throw new Error("Invalid response structure");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
        // Handle error here
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div>
       <Navbar/>
      {recipe && (
        <section id="two" className="wrapper style2">
          <div className="container">
            <div className="row">
              <div className="recipe-container">
                <h3>{recipe.title}</h3>
                <div className="recipe-image">
                  <img src={recipe.image} alt="" />
                </div>
                <div className="description">
                  <h4>Ingredients - </h4>
                  <p>{recipe.ingredients}</p>
                  <h4>Description</h4>
                  <p>{recipe.description}</p>
                  <h4>Cook Time</h4>
                  <p>{recipe.cookTime}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Single;