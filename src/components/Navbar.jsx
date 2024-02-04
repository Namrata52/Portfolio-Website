import React from 'react'

import "./Navbar.css";
import { NavLink, Link } from 'react-router-dom';
import HireMeBtn from './HireMeBtn';

function Navbar() {
    return (
        <div>

            <div className="nav">
                <div className="brand">
                    NAMRATA<span>.</span>
                </div>
                <div className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#projects" >Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                    
                </div>
                <div className="hire-me-btn">
                    <HireMeBtn></HireMeBtn>
                </div>
            </div>
        </div>
    )
}

export default Navbar