import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
// import './css/main.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './css/Admin.css'


const Admin = () => {
  return (
    <div>
      <div className="admin-container">
        <div className="row admin-row">
            <h1>ADMIN PANEL</h1>
            <form action="/Admin.html" method="post" encType="multipart/form-data">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title"/>
            
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image"/>
            
                <label htmlFor="image_description">Image Description:</label>
                <textarea id="image_description" name="image_description"></textarea>
            
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea id="ingredients" name="ingredients"></textarea>
            
                <label htmlFor="cookTime">Cook Time (in minutes):</label>
                <input type="number" id="cookTime" name="cookTime" min="1"/><br/>
            
                <button type="submit" value="Submit">Submit</button>
            </form>
          </div>  
    </div>
    </div>
  )
}

export default Admin;
