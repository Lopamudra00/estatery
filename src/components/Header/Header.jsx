import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../Data";
import './Header.css';

const Header = () => {
    const [navList] = useState(false)
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
                                <li key={index}>
                                    <Link to={list.path}> {list.text} </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button>
                        Sign In
                    </button>

                    <div>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header