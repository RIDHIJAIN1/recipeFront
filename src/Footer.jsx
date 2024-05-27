import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css';

const Footer = () => {
  return (
    <div>
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

export default Footer
