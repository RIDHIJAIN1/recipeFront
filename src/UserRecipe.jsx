import React, { useEffect, useState } from 'react';
import './css/userRecipe.css';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { server } from './main';
import { toast } from 'react-hot-toast'; // Ensure react-toastify is installed
import Navbar from './Navbar';

const UserRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [editingRecipe, setEditingRecipe] = useState(null);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [ingredients, setIngredients] = useState('');
const [cookTime, setCookTime] = useState('');
const [image, setImage] = useState(null);
const [loading, setLoading] = useState(false);


    const fetchData = async () => {
        try {
            const res = await axios.get(`${server}/recipe/allrecipe`, {
                withCredentials: true,
            });
            console.log('API response:', res.data);

            const recipesWithImageDataUrls = await Promise.all(
                res.data.recipe.map(async (recipe) => {
                    const imageURL = `http://localhost:4000${recipe.image}`;
                    return {
                        ...recipe,
                        image: imageURL,
                    };
                })
            );
            setRecipes(recipesWithImageDataUrls);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            toast.error(error.response?.data?.message || 'Error fetching recipes');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteData = async (id) => {
        try {
            await axios.delete(`${server}/recipe/${id}`, {
                withCredentials: true,
            });
            console.log("Recipe deleted successfully");
            toast.success("Recipe deleted successfully");

            // Remove the deleted recipe from the state
            setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe._id !== id));
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error deleting recipe');
            console.log('Error deleting recipe', error);
        }
    };

    const handleEditClick = (recipe) => {
        setEditingRecipe(recipe);
        setTitle(recipe.title);
        setDescription(recipe.description);
        setIngredients(recipe.ingredients);
        setCookTime(recipe.cookTime);
        setImage(null);
        // You can use a file input for image, but here we just set the current image URL
    };

    const updateRecipe = async () => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('ingredients', ingredients);
            formData.append('cookTime', cookTime);
            
            // Check if image is updated and append it to formData
            if (image) {
                formData.append('image', image);
            }
    
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
    
            await axios.put(`${server}/recipe/${editingRecipe._id}`, formData, config);
            toast.success("Recipe Updated Successfully");
            setLoading(false);
            setEditingRecipe(null); // Close the modal after successful update
            fetchData(); // Refresh the recipe list
        } catch (error) {
            console.error('Update Error:', error);
            toast.error(error.response?.data?.message || "Error Updating Recipe");
            setLoading(false);
        }
    };
    
      

    return (
            <div>
                   <Navbar/>
                <div className="container">
                    <h1>USER RECIPES</h1>
                    <div className="row">
                        {recipes.map(recipe => (
                            <div className="mycard" key={recipe._id}>
                                <div className="mycard-img">
                                    <img src={recipe.image} alt="" className='img' />
                                </div>
                                <div className="mycard-title">{recipe.title}</div>
                                <div className="mycard-subtitle">
                                    Ingredients: {recipe.ingredients.length > 50
                                        ? `${recipe.ingredients.slice(0, 10)}...`
                                        : recipe.ingredients}
                                </div>
                                <div className="mycard-subtitle">
                                    Description: {recipe.description.length > 50
                                        ? `${recipe.description.slice(0, 10)}...`
                                        : recipe.description}
                                </div>
                                <div className="mycard-subtitle">Cook Time: {recipe.cookTime}</div>
                                <hr className="mycard-divider" />
                                <div className="mycard-footer">
                                    <button className="mycard-btn" onClick={() => handleEditClick(recipe)}>
                                        <CiEdit />
                                    </button>
                                    <button
                                        className="mycard-btn"
                                        onClick={() => deleteData(recipe._id)}
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        
                {/* Modal for editing recipe */}
                {editingRecipe && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>Edit Recipe</h2>
                            <form onSubmit={(e) => { e.preventDefault(); updateRecipe(); }}>
                                <label>
                                    Title:
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Description:
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Ingredients:
                                    <textarea
                                        value={ingredients}
                                        onChange={(e) => setIngredients(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Cook Time:
                                    <input
                                        type="text"
                                        value={cookTime}
                                        onChange={(e) => setCookTime(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Image:
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                </label>
                                <button type="submit" disabled={loading}>
                                    {loading ? "Updating..." : "Update Recipe"}
                                </button>
                                <button type="button" onClick={() => setEditingRecipe(null)}>
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
        
};

export default UserRecipe;
