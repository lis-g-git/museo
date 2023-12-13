import React from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';


import '../css/App.css';


const Header = () => {

    return (

        <header id="header">
            <div className="center">
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                    <strong>Univ.</strong> Cano Quispe Lisbeth Nicole
                    </span>
                </div>
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Personal" activeClassName="active">Informacion</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Perfil" activeClassName="active">Galeria y Mision</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Educacion" activeClassName="active">Unidades</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Experiencia" activeClassName="active">Recurso Digital</NavLink>
                        </li>

                    </ul>
                </nav>

                <div className="clearfix"></div>
            </div>
        </header>

    );
}

export default Header;