import React from "react";
import '../styles/components/pages/contactoPage.css'
const constactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido </h2>
                <form action= "" method= " " className="formulario" >
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="mail" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="number" name=""/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=" " ></textarea>
                    </p>
                    <p className="acciones"> <input type= "submit" value="Enviar"/></p>

                </form>
            </div>
            <div className="datos" >
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 43242388</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>

                </ul>
            
            </div>

        </main>
    );
}
export default constactoPage ;