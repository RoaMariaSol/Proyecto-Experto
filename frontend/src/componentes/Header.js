import React from "react";

import { NavLink } from "react-router-dom";
import Logo from '../assets/disney.svg';

import '../estilos/conponentes/layout/Header.css';

const Header = (props) => {
    return (
        <header> 
          <img src={Logo}></img>
            <nav>
                <div>
                    <ul>
                        <li>< NavLink style={{  color: 'inherit', textDecoration: 'inherit'}} to="/" className={({isActive})=> isActive ? "activo": undefined }>Home</NavLink></li>
                        <li>< NavLink style={{  color: 'inherit', textDecoration: 'inherit'}} to="/noticias" className={({isActive})=> isActive ? "activo": undefined }>Noticias</NavLink></li>
                        <li>< NavLink style={{  color: 'inherit', textDecoration: 'inherit'}} to="/peliculas" className={({isActive})=> isActive ? "activo": undefined }>Peliculas</NavLink></li>
                        <li>< NavLink style={{  color: 'inherit', textDecoration: 'inherit'}} to="/shop" className={({isActive})=> isActive ? "activo": undefined }>Shop</NavLink></li>
                        <li>< NavLink style={{  color: 'inherit', textDecoration: 'inherit'}} to="/contacto" className={({isActive})=> isActive ? "activo": undefined }>Contacto</NavLink></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
}

export default Header;