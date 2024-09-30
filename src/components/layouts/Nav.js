import '../../styles/components/layout/Nav.css'
import React from "react";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>Inicio</NavLink></li>
                    <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="novedades" className={({isActive}) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="contacto" className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </nav>
        </div>

    );
}
export default Nav;