import "./Navbar.css"

export default function Navbar(){
    return(
        <div className="Navbar">
            <div className="nav-left">
            <img src={process.env.PUBLIC_URL+"/images/game-logo.png"} alt="404" />
            <h5>RoxStar Games</h5>
            </div>
            <ul>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>

            <div className="nav-right">
            <button>Log in</button>
            <button>Sign Up</button>
            </div>
        </div>
    )
}