import  'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
// import 'jquery'
// import './js/main';
// import './js/jquery.scrollex.min';
// import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap.bundle'
import image from './images/fast-food-dish-blue_155003-27518.avif'
import image2 from './images/tamanna.jpg'
import image3 from './images/ella.jpg'
import image4 from './images/Kalyani.jpg'
import image5 from './images/download (1).jpg'
import image6 from './images/images (2).jpg'
import image7 from './images/images (3).jpg'
import image8 from './images/images (4).jpg'


// import './js/main'
// import './js/jquery.min'
// import './js/jquery.scrollex.min'
// import './js/skel.min'
// import './js/util'

function App() {


  return (
  <div className="App">
   <header id="header" className="alt">
    <div className="logo"><a href="index.html"></a></div>
				<a href="#menu">Menu</a>
			</header>
      <nav className="navbar">
  <ul className="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="Recipe.html">RECIPE</a></li>
    <li><a href="Login.html">LOGIN</a></li>
    <li><a href="Admin.html">ADMIN</a></li>
  </ul>
</nav>


        {/* // ------------------------------------BANNER--------------------- */}

        <section className="banner full">
      <article>
        <img
          src={image2}
          alt=""
          width="1440"
          height="961"
        />
        <div className="inner">
          <header>
            <p>Where Taste Knows No Bounds</p>
            <h2>FlavorFusion</h2>
          </header>
        </div>
      </article>
      <article>
        <img
          src={image}
          alt=""
          width="1440"
          height="961"
        />
        <div className="inner">
          <header>
            <p>Where Taste Knows No Bounds</p>
            <h2>FlavorFusion</h2>
          </header>
        </div>
      </article>
      <article>
        <img
          src={image3}
          alt=""
          width="1440"
          height="962"
        />
        <div className="inner">
          <header>
            <p>Where Taste Knows No Bounds</p>
            <h2>FlavorFusion</h2>
          </header>
        </div>
      </article>
      <article>
        <img
          src={image2}
          alt=""
          width="1440"
          height="961"
        />
        <div className="inner">
          <header>
            <p>Where Taste Knows No Bounds</p>
            <h2>FlavorFusion</h2>
          </header>
        </div>
      </article>
      <article>
        <img
          src={image}
          alt=""
          width="1440"
          height="962"
        />
        <div className="inner">
          <header>
            <p>Where Taste Knows No Bounds</p>
            <h2>FlavorFusion</h2>
          </header>
        </div>
      </article>
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
                  <a href="#" className="button alt">Learn More</a>
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
                  <a href="#" className="button alt">Learn More</a>
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
<footer id="footer"><div className="container">
					<ul className="icons"><li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
					</ul></div>
			</footer><div className="copyright">
			FlavorFusion <a href="https://templated.co/"></a>.
		</div>













  </div>






  
  )
}

export default App
