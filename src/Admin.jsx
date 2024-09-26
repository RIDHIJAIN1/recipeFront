
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './css/Admin.css';
import axios from 'axios';
import { server } from './main';
import toast from 'react-hot-toast';
import logo from "./images/Delicious.jpg"
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null); // Updated to store file object
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [recipes , setRecipes] = useState([]);
  const [idToDelete , setIdToDelete] = useState('');
  const [recipeIdToUpdate , setRecipeIdToUpdate] = useState("");
 


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('image', image); // Ensure image is a file object
      formData.append('description', description);
      formData.append('ingredients', ingredients);
      formData.append('cookTime', cookTime);
  
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
  
      const { data } = await axios.post(`${server}/recipe/new`, formData, config);
      toast.success(data.message);
      setLoading(false);
      setTitle('');
      setImage(null);
      setCookTime('');
      setDescription('');
      setIngredients('');
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      setLoading(false);
    }
  };
  


  return (
    <div>
  
      <div className="admin-container">
        <div className="row admin-row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src={logo} alt=""style={ {"width": "500px",
    "border-radius": "50%",
    "height": "500px",
    "border": "2px solid green"}}/>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
          <h1>ADD A RECIPE </h1><button>
    <Link to="/UserRecipes"><span>SHOW ALL RECIPES </span></Link>
    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
</button>
          <form encType="multipart/form-data" onSubmit={submitHandler}>
            {/* <label htmlFor="updateRecipe">Enter Recipe Id To Update:</label>
            <input type="text" id='updateRecipe'value={recipeIdToUpdate}onChange={(e)=>setRecipeIdToUpdate(e.target.value)} />

          <label htmlFor="deleteRecipeid">Enter Recipe Id To Delete:</label>
          <input type="text" id="deleteRecipeid" name="unique"  value={idToDelete}onChange={(e)=>setIdToDelete(e.target.value)}/> */}
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} />
            <label htmlFor="image_description">Image Description:</label>
            <textarea id="image_description" name="image_description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients" name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
            <label htmlFor="cookTime">Cook Time (in minutes):</label>
            <input type="number" id="cookTime" name="cookTime" min="1" value={cookTime} onChange={(e) => setCookTime(e.target.value)} /><br />
            <button disabled={loading} type="submit">Submit</button>
      
          </form>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Admin;