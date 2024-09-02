import "./rrd.css"

export default function RRD() {
    return(
        <div className="rrd">
            <div className="rrd-left">
                <img src={process.env.PUBLIC_URL+'/images/advertisement/RRD2Logo.png'} alt="" />
                <p>Essentials Collection Now Available</p>
                <button>SHOP NOW</button>
            </div>

            <div className="rrd-right">
            <img src={process.env.PUBLIC_URL+'/images/advertisement/RRD2Mockup.png'} alt="" />
            </div>
        </div>
    )
}