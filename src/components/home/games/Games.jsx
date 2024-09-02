import Card from "../card/Card";
import Slider from "react-slick";
import "./games.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Games(){

    var settings = {
        dots: true,
        infinite: true,
        draggable: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      
          responsive: [
            {
              breakpoint: 1440, // Large desktop screens
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1200, // Standard desktop screens
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024, // Tablets and small desktops
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768, // Landscape tablets and small devices
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480, // Portrait mobile devices
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
        <div className="cards">
        <h1>Games</h1>
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