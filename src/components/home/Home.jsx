import Games from './games/Games'
import './home.css'
import RRD from '../home/RRD/RRD'
import Slider from '../home/slider/Slider'

export default function Home(){
    return(
        <>
        <Slider/>
        <Games/>
        <RRD/>
        </>
    )
}