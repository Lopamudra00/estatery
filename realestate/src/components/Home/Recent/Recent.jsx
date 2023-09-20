import React from "react"
import Heading from "../Heading/Heading"
import "./Recent.css"
import RecentCard from "./RecentCard"

const Recent = ({ location, property, price }) => {
    return (
        <>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                    <RecentCard location={location} property={property} price1={price} />
                </div>
            </section>
        </>
    )
}

export default Recent
