import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import image5 from './images/download (1).jpg'


const Recipe = () => {
  return (
    <div>
      <header id="header"><div className="logo"><a href="index.html"></a></div>
				<a href="#menu">Menu</a>
			</header>
            <nav id="menu"><ul className="links"><li><a href="index.html">Home</a></li>
					<li><a href="Recipe.html">Recipe</a></li>
					<li><a href="Login.html">Login</a></li>
				</ul></nav>
                <section id="One" className="wrapper style3"><div className="inner">
					<header className="align-center"><p>FlavorFusion</p>
						<h2>RECIPES</h2>
					</header></div>
			</section>
            <section id="two" className="wrapper style2">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="card" style={{}}>
								<img src={image5} className="card-img-top" alt="..."/>
								<div className="card-body">
								  <h5 className="card-title">Shahi Paneer</h5>
								  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								  <a href="single.html" className="btn btn-dark">Learn More</a>
								</div>
							  </div>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="card" >
								<img src={image5} className="card-img-top" alt="..."/>
								<div className="card-body">
								  <h5 className="card-title">Shahi Paneer</h5>
								  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								  <a href="single.html" className="btn btn-dark">Learn More</a>
								</div>
							  </div>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="card" >
								<img src={image5} className="card-img-top" alt="..."/>
								<div className="card-body">
								  <h5 className="card-title">Shahi Paneer</h5>
								  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								  <a href="single.html" className="btn btn-dark">Learn More</a>
								</div>
							  </div>
						</div>
						
						
					</div>
				</div>

			</section>
			
			<footer id="footer"><div className="container">
					<ul className="icons"><li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
					</ul></div>
			</footer><div className="copyright">
			Made with <a href="https://templated.co/">Templated</a>.
		</div>


    </div>
  )
}

export default Recipe
