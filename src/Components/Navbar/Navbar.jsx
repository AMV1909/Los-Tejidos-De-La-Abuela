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
                <Link to="/cares">Cuidados</Link>
            </nav>

            <div className="mobile-navbar-768px">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/">Inicio</Link>
                <Link to="/contact">Contacto</Link>

                <div style={{ display: toogle ? "" : "none" }} className="list">
                    <Link to="/about">Sobre nosotros</Link>
                    <Link to="/cares">Cuidados</Link>
                </div>

                <RxHamburgerMenu size={40} onClick={() => setToogle(!toogle)} />
            </div>

            <div className="mobile-navbar">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <div style={{ display: toogle ? "" : "none" }} className="list">
                    <Link to="/">Inicio</Link>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/about">Sobre nosotros</Link>
                    <Link to="/cares">Cuidados</Link>
                </div>

                <RxHamburgerMenu size={40} onClick={() => setToogle(!toogle)} />
            </div>
        </>
    );
}
