import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./css/Admin.css";
import axios from "axios";
import { server } from "./main";
import toast from "react-hot-toast";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(0);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null); // Updated to store file object
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [idToDelete, setIdToDelete] = useState("");
  const [recipeIdToUpdate, setRecipeIdToUpdate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("description", description);
      formData.append("ingredients", ingredients);
      formData.append("cookTime", cookTime);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        `${server}/recipe/new`,
        formData,
        config
      );
      setLoading(false);
      setShow(0);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  // -----------------------------updatedata----------------------------------

  // const updateData = async () => {
  //   try {
  //     const formData = {
  //       title,
  //       image,
  //       description,
  //       ingredients,
  //       cookTime,
  //     };
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     // Log the complete URL for debugging
  //     await axios.put(`${server}/recipe/${recipeIdToUpdate}`, formData, config);
  //     console.log("Recipe Updated Successfully");
  //     toast.success("Recipe Updated Successfully");
  //   } catch (error) {
  //     console.error("Update Error:", error);
  //     toast.error("Error Updating Recipe");
  //   }
  // };
  // ---------------------------------showdata-------------------------------

  const fetchData = () => {
    axios
      .get(`${server}/recipe/allrecipe`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("API response:", res.data);
        const recipesWithImageDataUrls = res.data.recipe.map(async (recipe) => {
          const imageDataUrl = await arrayBufferToBase64(recipe.image.data);
          return {
            ...recipe,
            image: imageDataUrl,
          };
        });

        Promise.all(recipesWithImageDataUrls).then(setRecipes);
        console.log(recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        toast.error(error.response.data.message);
      });

    console.log("Recipes:", recipes);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const deleteRecipie = async (id) => {
    try {
      console.log(id);
      await axios.delete(`${server}/recipe/${id}`);
      console.log("Recipe deleted successfully");
      fetchData();
      toast.success("Recipe deleted successfully");
    } catch (error) {
      toast.error("Error deleting recipe");
      console.log("Error deleting recipe");
    }
  };
  // --------------------------------deleteData----------------------------

  // const deleteData = async () => {
  //   try {
  //     await axios.delete(`${server}/recipe/${idToDelete}`);
  //     console.log("Recipe deleted successfully");
  //     toast.success("Recipe deleted successfully");
  //   } catch (error) {
  //     toast.error("Error detecting recipe");
  //     console.log("Error detecting recipe");
  //   }
  // };

  return (
    <div>
      <div className="admin-container">
        {show == 0 ? (
          <button onClick={() => {setShow(1)}}>Add Recipie</button>
        ) : (
          <button onClick={() => {setShow(0)}}>Show Recipie</button>
        )}
        <div className="row admin-row">
          <h1>ADMIN PANEL</h1>
          {show == 1 ? (
            <form encType="multipart/form-data" onSubmit={submitHandler}>
              {/* <label htmlFor="updateRecipe">Enter Recipe Id To Update:</label>
              <input
                type="text"
                id="updateRecipe"
                value={recipeIdToUpdate}
                onChange={(e) => setRecipeIdToUpdate(e.target.value)}
              />

              <label htmlFor="deleteRecipeid">Enter Recipe Id To Delete:</label>
              <input
                type="text"
                id="deleteRecipeid"
                name="unique"
                value={idToDelete}
                onChange={(e) => setIdToDelete(e.target.value)}
              /> */}
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label htmlFor="image_description">Image Description:</label>
              <textarea
                id="image_description"
                name="image_description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <label htmlFor="ingredients">Ingredients:</label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
              <label htmlFor="cookTime">Cook Time (in minutes):</label>
              <input
                type="number"
                id="cookTime"
                name="cookTime"
                min="1"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
              />
              <br />
              <button disabled={loading} type="submit">
                Submit
              </button>
              {/* <div className="crud-buttons">
                <button type="button" onClick={fetchData}>
                  Show
                </button>
                <button type="button" onClick={updateData}>
                  Update
                </button>

                <button type="button" onClick={deleteData}>
                  Delete
                </button>
              </div> */}
            </form>
          ) : (
            ""
          )}
        </div>

        {/* -------------------------------------------showData------------------------------------- */}
        {show == 0 ? (
          <div className="show-data">
            <div className="row">
              {recipes.map((recipe) => (
                <div key={recipe._id} className="col-md-4 recipe-data">
                  <div className="recipeid">{recipe._id}</div>
                  <div className="title">{recipe.title}</div>
                  <img src={recipe.image} alt="" style={{ width: "300px" }} />
                  <div className="ingredients">
                    Ingredients:{recipe.ingredients}
                  </div>
                  <div className="decription">
                    Description:{recipe.description}
                  </div>
                  <div className="cooktime">CookTime:{recipe.cookTime}</div>
                  <button
                    className="btn"
                    onClick={() => deleteRecipie(recipe._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Admin;
