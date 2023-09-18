import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

import logo from "../../Assets/descargar.png";

import "./Navbar.css";

export function Navbar() {
    const [toogle, setToogle] = useState(false);

    return (
        <>
            <nav>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/">Inicio</Link>
                <Link to="/contact">Contacto</Link>
                <Link to="/about">Sobre nosotros</Link>
            </nav>

            <div className="mobile-navbar">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <div style={{ display: toogle ? "" : "none" }} className="list">
                    <Link to="/">Inicio</Link>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/about">Sobre nosotros</Link>
                </div>

                <RxHamburgerMenu size={40} onClick={() => setToogle(!toogle)} />
            </div>
        </>
    );
}
