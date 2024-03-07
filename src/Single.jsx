import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import image4 from './images/Kalyani.jpg';
import './css/single.css'
const Single = () => {
  return (
    <div>
      <section id="two" className="wrapper style2">
        <div className="container">
          <div className="row">
            <div className="recipe-container">
              <div className="recipe-image">
                <img src={image4} alt="" />
              </div>
              <div className="description">
  <h3>Shahi Paneer</h3>
  <h4>Ingredients - </h4>
  <p>
    500 gm paneer, 1 inch ginger, 3 green cardamom, 1 teaspoon red chilli, 1 teaspoon garam masala powder, 1 1/2 cup tomato puree, water as required, 1/2 cup almonds, 2 onion, 3 green chilli, 1/2 cup yoghurt (curd), 6 tablespoon ghee, 1 cup milk, salt as required, 1/2 cup cashews
  </p>
  <h4>Description</h4>
  <p>
    Step 1: Chop all the veggies and make almond-cashew paste.<br />
    Step 2: Prepare onion-tomato gravy using curd. When the gravy is cooked, let it cool down at room temperature. When it's cool enough, add it to a mixer jar and blend till smooth and keep aside.<br />
    Step 3: Add paneer cubes in the gravy and cook for 3-5 minutes. Now, heat the remaining ghee in another pan and add the ground gravy in it along with red chilli powder, garam masala powder, cashew and almond paste along with salt. Bring it to a boil or till the gravy thickens. Then add the paneer cubes and milk. Cook for another 3 to 5 minutes. While the gravy is being cooked, cut the paneer into cubes and keep it aside till required. Take two cubes and grate them for garnishing.<br />
    Step 4: Garnish and serve.
  </p>
  <h4>Cook Time</h4>
  <p>25 min</p>
</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
