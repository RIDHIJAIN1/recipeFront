import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
// import image4 from './images/Kalyani.jpg';
import './css/single.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from './main';
import Navbar from './Navbar';


const Single = () => {
  const {id} = useParams();
  const [recipe , setRecipe] = useState(null)

  const arrayBufferToBase64 = (buffer) => {
    return new Promise((resolve, reject) => {
        const blob = new Blob([new Uint8Array(buffer.data)], { type: buffer.contentType });
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
  };

  useEffect(() => {
    axios.get(`${server}/recipe/${id}`, {
      withCredentials: true,
    })
    .then(async res => {
      // Assuming res.data.recipe is a single object and not an array
      const imageDataUrl = await arrayBufferToBase64(res.data.recipe.image.data);
      setRecipe({
        ...res.data.recipe,
        image: imageDataUrl,
      });
    })
    .catch(error => {
      console.error('Error fetching recipe details:', error);
    });
  }, [id]);
  

if(!recipe){
  return <div>Loading..</div>
}



  return (
   
    <div>
       <Navbar/>
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
  <p>
    {recipe.ingredients}
  </p>
  <h4>Description</h4>
  <p>
   {recipe.description}
  </p>
  <h4>Cook Time</h4>
  <p>{recipe.cookTime}</p>
</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
