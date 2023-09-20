import Header from "../Header/Header"
import Search from "./Search/Search"
import './Home.css'
import Recent from "./Recent/Recent"
import Location from "./Location/Location"
import Footer from "../Footer/Footer"
import { useState } from "react"
const Home = () => {
    const [location, setLocation] = useState("");
    const [property, setProperty] = useState("");
    const [price, setPrice] = useState({ low: "", high: "" });
    return (
        <>
            <Header />
            <Search location={location} property={property} setLocation={setLocation} setProperty={setProperty} setPrice={setPrice} />
            <Recent location={location} property={property} price={price} />
            <Location />
            <Footer />

        </>
    )
}

export default Home