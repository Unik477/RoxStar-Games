import { useState } from "react"
import "./Slider.css"


export default function Slider(){

    const[gameName,setGameName]=useState("Grand Theft Auto  Vl")
    const[gameSeason,setGameSeason]=useState("Trailer 1")
    const[gameImage,setGameImage]=useState("/images/trailer/trailer01.png")

    const [trailerActive, setTrailer] = useState(0);

  //  change the className of a specific div based on its index
  const handleClick = (index) => {
    setTrailer(index);
    if(index===0) {
        setGameSeason("Trailer 1")
        setGameName("Grand Theft Auto  Vl")
        setGameImage("/images/trailer/trailer01.png")
    }
    if(index===1) {
        setGameSeason("Bottom Dollar Bounties")
        setGameName("Grand Theft Auto Online")
        setGameImage("/images/trailer/trailer02.png")
    }
    if(index===2) {
        setGameSeason("The Cluckin' Bell Farm Raid")
        setGameName("Grand Theft Auto Online")
        setGameImage("/images/trailer/trailer03.png")
    }
    if(index===3) {
        setGameSeason("Benefactor Takes Over the GTA Online Auto Scene")
        setGameName("Grand Theft Auto Online")
        setGameImage("/images/trailer/trailer04.png")
    }
  };
    return(
        <div className="slider">
            <div className="slider-image">
                <img src={process.env.PUBLIC_URL+`${gameImage}`} alt="ImageNotFound :)" />
            </div>

            <div className="slider-control">
                <h4>{gameName}</h4>
                <h1>{gameSeason}</h1>
                <button>WATCH NOW</button>

                <div className="slider-buttons">
                    <div className={trailerActive=== 0 ? 'trailer-active' : 'trailer'} onClick={()=>handleClick(0)}></div>
                    <div className={trailerActive=== 1 ? 'trailer-active' : 'trailer'} onClick={()=>handleClick(1)}></div>
                    <div className={trailerActive=== 2 ? 'trailer-active' : 'trailer'} onClick={()=>handleClick(2)}></div>
                    <div className={trailerActive=== 3 ? 'trailer-active' : 'trailer'} onClick={()=>handleClick(3)}></div>
                </div>
            </div>
        </div>
    )
}