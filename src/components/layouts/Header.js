import '../../styles/components/layout/Header.css';
import React from "react";
const Header = (props) => {
    return(
        <header>
            <div className="holder">
                <img src="images/logo.png" width="100" alt="Transportes x"/>
                <h1>Transportes x</h1>
            </div>

        </header>
        
    );
}
export default Header;