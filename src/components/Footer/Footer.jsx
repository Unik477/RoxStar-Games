import "./footer.css"

export default function Footer() {

    const handleSubscribe=()=>{
            alert("Subscribed Successfully!")
    }
    return(
        <div className="footer">
            <section className="footer-top">

            <div className="footer-left">
            <ul>
            <li>Corporate</li>
            <li>Privacy</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
            <li>Legal</li>
            <li>Do Not Sell or Share My Personal Information</li>
            </ul>
            </div>


            <div className="footer-right">
                <section className="newsletter">
                    <h2>Get the Latest Updates!</h2>
                    <p>Subscribe to our Newsletter</p>

                    <div className="newsletter-subscribe">
                        <input type="email" placeholder="E-mail Address..."/>
                        <button onClick={handleSubscribe}>Subscribe</button>
                    </div>
                </section>

                <section className="footer-icon">
            <img src={process.env.PUBLIC_URL+"/images/icons/x.png"} alt="404" />
            <img src={process.env.PUBLIC_URL+"/images/icons/youtube.png"} alt="404" />
            <img src={process.env.PUBLIC_URL+"/images/icons/insta.png"} alt="404" />
            <img src={process.env.PUBLIC_URL+"/images/icons/facebook.png"} alt="404" />
            <img src={process.env.PUBLIC_URL+"/images/icons/twitch.png"} alt="404" />
                </section>
            </div>

            </section>

            <section className="footer-bottom">
                <p><b>RoxStar Games</b></p>
                <ul>
                    <li>New York</li>
                    <li>London</li>
                    <li>Paris</li>
                    <li>Bogotá</li>
                </ul>
                <p><b>MCMXCVIII</b></p>
            </section>
        </div>
    )
}