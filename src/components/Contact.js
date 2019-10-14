import React from 'react';
import wp from '../images/w.png'

const Contact = () => {
    return ( 
<footer>
		<div className="container center-text">
			<ul className="social-icons">
				<li><a href="https://www.facebook.com/2Manoj1" target="_blank" rel="noopener noreferrer"><i className="icon icon-facebook"></i></a></li>
				<li><a href="https://www.twitter.com/ManojMukherje19" target="_blank" rel="noopener noreferrer"><i className="icon icon-twitter"></i></a></li>
				<li><a href="https://wa.me/918892525120" target="_blank" rel="noopener noreferrer"><img alt="WP" src={wp} /></a></li>
			</ul>
		</div>
	</footer>
        );
    }
    
    export default Contact;