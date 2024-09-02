import "./card.css"

export default function Card(props){
    return(
        <div className="game-card">
            <div className="game-image">
            <img src={process.env.PUBLIC_URL+`${props.image}`} alt="404" />
            </div>

            <section className="game-detail">
                <header>{props.name}</header>
                <p><b>₹{props.price}</b></p>

                <div className="game-platform">
                <img src={process.env.PUBLIC_URL+"/images/gamePlatform/pc.png"} alt="404" />
                <img src={process.env.PUBLIC_URL+"/images/gamePlatform/xbox.png"} alt="404" />
                <img src={process.env.PUBLIC_URL+"/images/gamePlatform/ps.png"} alt="404" />
                </div>
            </section>
        </div>
    )
}