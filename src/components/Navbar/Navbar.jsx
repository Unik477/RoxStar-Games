import { useNavigate } from "react-router"
import "./Navbar.css"
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
            <h5>RoxStar Games</h5>
            </div>
            <ul>
                <li><a onClick={()=>navigate("/products")}>About Us</a></li>
                <li><a onClick={()=>navigate("/products")}>Products</a></li>
                <li><a onClick={()=>navigate("/products")}>Contact Us</a></li>
            </ul>

            <div className="nav-right">
            <button onClick={handleScroll}>Subscribe to Newsletter</button>
            {/* <button>Sign Up</button> */}
            </div>
        </div>
    )
}