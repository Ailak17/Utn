import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="novedades">Novedades</Link></li>
                    <li><Link to="contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>

    );
}
export default Nav;