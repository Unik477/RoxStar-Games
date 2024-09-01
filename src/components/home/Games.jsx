import Card from "./Card";
import Slider from "react-slick";
import "./games.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Games(){

    var settings = {
        dots: true,
        infinite: true,
        draggable: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
          
        ]
      };
    return(
        <>
        <h1>Games</h1>
        <div className="cards">
        <Slider {...settings}>
        <Card name="Grand Theft Auto V" price="2,540" image="/images/Store/GTA5.png"/>
        <Card name="Red Dead Redemption" price="3,496" image="/images/Store/RRD.png"/>
        <Card name="Max Payne 3" price="1,664" image="/images/Store/MaxP3.png"/>
        <Card name="Red Dead Redemption 2" price="4,995" image="/images/Store/RRD2.png"/>
        <Card name="Grand Theft Auto Trilogy" price="4,995" image="/images/Store/GTATrilogy.png"/>
        <Card name="Bully: Scholarship Edition" price="4,995" image="/images/Store/bully.png"/>
        <Card name="Grand Theft Auto 4" price="4,995" image="/images/Store/GTA4.png"/>
        </Slider>
        </div>
        </>
    )
}