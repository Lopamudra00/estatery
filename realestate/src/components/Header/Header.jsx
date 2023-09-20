import React from "react";
import { useState } from "react";
import { nav } from "../Data";
import './Header.css';

const Header = () => {
    const [navList, setNavList] = useState(false)
    return (
        <header>
            <div className="navbar">
                <div className="container flex">
                    <div className="logo">
                        <img src={require("../../img/logo.png")} alt="" />
                    </div>

                    <div className="nav">
                        <ul className={navList ? "small" : "flex"}  >
                            {nav.map((list, index) => (
                                <li className="nav-link" key={index}>
                                    <a href={list.path}> {list.text} </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button>
                        Sign In
                    </button>

                    <div className='toggle'>
                        <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header