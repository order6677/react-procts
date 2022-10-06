
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import  "./main.css"
import Meal from "react";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
        

        
		<header>
			
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">add recipe</a>
				<a href="/#">sign up</a>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>

        
	);
}

export default Navbar;

