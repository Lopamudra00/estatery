import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import React from "react"
import Header from "./Header/Header"
import Home from "./Home"
import About from "./About/About";
import Services from "./Service/Services";
import Pricing from "./Price/Price";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";


const Pages = () => {
    return (
        <>

            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/services' component={Services} />
                    <Route exact path='/pricing' component={Pricing} />
                    <Route exact path='/contact' component={Contact} />

                </Switch>
            </Router>

        </>
    )
}

export default Pages