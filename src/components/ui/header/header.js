import { useState } from 'react';
import { Navbar } from "./nav/navbar";
import { Link } from 'react-scroll';
import '../../../assets/css/header.css';

export const Header = () => {
    const [state, setState] =useState(false)
    
    return (
        <header>
            <div className="header-container">
                <Link smooth={true} to="/" >
                    <div className="title">
                        <h1 id="head-title">Junior Vasquez</h1>
                        <h1 id="head-title">Developer</h1>
                    </div>
                </Link>

                <div className="figure-icon" onClick={() => setState(!state)}>
                    <i className="material-icons" id="menu">{state ? 'close' : 'menu'}</i>
                </div>

                <Navbar navClass={state ? 'nav-container open' : "nav-container"} ></Navbar>
            </div>
        </header>
    );
}