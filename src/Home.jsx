import React from 'react'
import './css/main.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';
import 'bootstrap/dist/js/bootstrap.bundle'
import image4 from './images/Kalyani.jpg'
import image5 from './images/download (1).jpg'
import image6 from './images/images (2).jpg'
import image7 from './images/images (3).jpg'
import image8 from './images/images (4).jpg'
import { Link } from 'react-router-dom'


function Home() {


  return (
  <div className="App">
  
     <Navbar/>

        {/* // ------------------------------------BANNER--------------------- */}

        <section className="banner full">
     <div className="content">
      <h2>Where Taste Knows No bounds</h2>
      <h1>Flavour Fusion</h1>
     </div>
    </section>
    {/* -----------------------------------SECTION2------------------------ */}
    <section id="one" className="wrapper style2">
      <div className="inner">
        <div className="grid-style">
          <div>
            <div className="box">
              <div className="image fit">
                <img
                  src={image4}
                  alt=""
                  width="600"
                  height="300"
                />
              </div>
              <div className="content">
                <header className="align-center">
                  <p style={{fontWeight: 600}}>Shahi Paneer Recipe</p>
                  <p>INGREDIENTS</p>
                </header>
                <p>
                  500 gm paneer 1 inch ginger 3 green cardamom 1 teaspoon red
                  chilli 1 teaspoon garam masala powder 1 1/2 cup tomato puree
                  water as required 1/2 cup almonds 2 onion 3 green chilli 1/2
                  cup yoghurt (curd) 6 tablespoon ghee 1 cup milk salt as
                  required 1/2 cup cashews
                </p>
                <footer className="align-center">
                  <Link to="/single" className="button alt">Learn More</Link>
                </footer>
              </div>
            </div>
          </div>
          <div>
            <div className="box">
              <div className="image fit">
                <img
                  src={image4}
                  alt=""
                  width="600"
                  height="300"
                />
              </div>
              <div className="content">
                <header className="align-center">
                  <p style={{fontWeight: 600}}>Shahi Paneer Recipe</p>
                  <p>INGREDIENTS</p>
                </header>
                <p>
                  500 gm paneer 1 inch ginger 3 green cardamom 1 teaspoon red
                  chilli 1 teaspoon garam masala powder 1 1/2 cup tomato puree
                  water as required 1/2 cup almonds 2 onion 3 green chilli 1/2
                  cup yoghurt (curd) 6 tablespoon ghee 1 cup milk salt as
                  required 1/2 cup cashews
                </p>
                <footer className="align-center">
                  <Link to="/single" className="button alt">Learn More</Link>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* --------------------------------ANOTHER BANNER------------------------ */}
    <section id="two" className="wrapper style3">
      <div className="inner">
        <header className="align-center">
          <p>Cooking never got any easier.</p>
          <h2>TastyTraverse</h2>
        </header>
      </div>
    </section>

    {/* -----------------------------GALLERY---------------------------- */}
    <section id="three" className="wrapper style2"><div className="inner">
					<header className="align-center"><p className="special">Where Every Bite Tells a Story</p>
						<h2>DelishDomain</h2>
					</header><div className="gallery">
						<div>
							<div className="image fit">
								<a href="#"><img src={image5} alt="" width="600" height="300"/></a>
							</div>
						</div>
						<div>
							<div className="image fit">
								<a href="#"><img src={image6} alt="" width="600" height="300"/></a>
							</div>
						</div>
						<div>
							<div className="image fit">
								<a href="#"><img src={image7} alt="" width="600" height="300"/></a>
							</div>
						</div>
						<div>
							<div className="image fit">
								<a href="#"><img src={image8} alt="" width="600" height="300"/></a>
							</div>
						</div>
					</div>
				</div>
			</section>
{/* --------------------------Footer----------------------------- */}
<footer id="footer"><div className="footer-container">
					<ul className="icons"><li> <a href="https://www.linkedin.com/in/ridhi-jain-3011a8254/details/experience/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a></li></ul>
					<ul className="icons"><li> <a href="https://www.linkedin.com/in/ridhi-jain-3011a8254/details/experience/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> 
        </a></li>
					</ul>
					<ul className="icons"><li> <a href="https://www.linkedin.com/in/ridhi-jain-3011a8254/details/experience/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> 
        </a></li>
					</ul>
          </div>
					
          
			</footer><div className="copyright">
			Copyright @FlavorFusion 2023<a href="https://templated.co/"></a>.
		</div>













  </div>






  
  )
}

export default Home;