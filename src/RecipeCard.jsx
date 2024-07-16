// RecipeCard.jsx
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import React from "react";

export const renderRecipeCard = (recipe, handleLikeClick, showDeleteButton, handleDeleteClick) => (
    <div key={recipe._id} className="col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <div className="card-image">
          <img src={recipe.image} className="card-img-top" alt="Recipe" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">
            {recipe.ingredients.length > 180
              ? `${recipe.ingredients.slice(0, 180)}...`
              : recipe.ingredients}
          </p>
          <Link to={`/recipe/${recipe._id}`} className="btn btn-dark">
            Watch More
          </Link>
          {handleLikeClick && (
            <div className="wishlist" onClick={() => handleLikeClick(recipe._id)}>
              <FaRegHeart className="heartIcon" />
            </div>
          )}
          {showDeleteButton && handleDeleteClick && (
            <button type="button" className="btn btn-dark" onClick={() => handleDeleteClick(recipe._id)}>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
  