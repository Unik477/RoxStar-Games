import { useNavigate } from "react-router"
import "./Navbar.css"
import { NavLink } from "react-router-dom";
export default function Navbar(){
    const navigate=useNavigate()
    
    const handleScroll = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      };
    return(
        <div className="Navbar">
            <div className="nav-left">
            <img src={process.env.PUBLIC_URL+"/images/game-logo.png"} alt="404" />
            <h5 onClick={()=>navigate("/")}>RoxStar Games</h5>
            </div>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/about">About Us</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/products">Store</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/contact">Contact Us</NavLink></li>
            </ul>

            <div className="nav-right">
            <button onClick={handleScroll}>Subscribe to Newsletter</button>
            {/* <button>Sign Up</button> */}
            </div>
        </div>
    )
}