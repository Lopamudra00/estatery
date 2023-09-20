import React, { useEffect } from "react";
import Heading from "../Heading/Heading";
import './Search.css'
import { useState } from "react";

const Search = ({ setPrice, setLocation, setProperty, location, property }) => {
    const onHandleChange = (e) => {
        setProperty({ ...property, property: e.target.value })
        console.log("onHandleChange")
    }
    const onHandleLocation = (e) => {
        setLocation({ ...location, location: e.target.value })
    }

    return (

        <div className='search'>
            <div className='container'>
                <div >
                    <Heading title='Find Your Comfort Zone ' subtitle='Find new & featured property located in your local city.' />
                </div>

                <form className='flex'>
                    <div className='box'>
                        <span>City/Street</span>
                        <input placeholder='Location'
                            onChange={(e) => onHandleLocation(e)}
                            type="text"
                        />
                    </div>
                    <div className='box'>
                        <span>Property Type</span>
                        <input placeholder='Property Type'
                            onChange={(e) => onHandleChange(e)}
                            type="text"

                        />
                    </div>
                    <div className='box'>
                        <span>Price Range</span>
                        <input onChange={(a) => { setPrice(prev => ({ ...prev, low: a.target.value })) }} type='text' placeholder='Price Range' />
                        <input onChange={(a) => { setPrice(prev => ({ ...prev, high: a.target.value })) }} type='text' placeholder='Price Range' />
                    </div>
                    <div className='box'>
                        <h4>Advance Filter</h4>
                    </div>
                    <button className='btn1'>
                        <i className='fa fa-search'>Go</i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search