import Card from "../home/card/Card"
import "./products.css"
export default function Products() {

    const imagePath=[
        '/images/Store/GTA5.png',
        '/images/Store/GTA4.png',
        '/images/Store/RRD.png',
        '/images/Store/manhunt.jpg',
        '/images/Store/MaxP3.png',
        '/images/Store/GTAvice.jpg',
        '/images/Store/LANoire.jpg',
        '/images/Store/bully.png',
        '/images/Store/RRD2.png',
        '/images/Store/GTATrilogy.png',
        '/images/Store/warriers.jpg',
        '/images/Store/RRD.jpg',
        '/images/Store/midnight.jpg',
        '/images/Store/maxpayne.jpg',
        '/images/Store/maxpayne2.jpg'

    ]
    return(
        <div className="product">
            <div className="product-top">
            <img src={process.env.PUBLIC_URL+"/images/Store/products-main.png"} alt="404" />
            </div>

            <div className="product-cards">
           { imagePath.map((path, index) => (
      <Card key={index} image={path} price="2,459"/>
    ))}
            </div>
        </div>
    )
}