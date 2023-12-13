import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const Posgrado = () => {
    return (
        <Fragment>
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                        <strong>Univ.</strong> Cano Quispe Lisbeth Nicole
                        </span>
                    </div>

                    <nav id="menu2">
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Educacion" activeClassName="active">Unidad</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
            <div className="panel">

                <div >
                    <nav id="menu3">
                        <ul>
                            <li>
                                <NavLink to="/Pregrado" activeClassName="active">Botanica</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Posgrado" activeClassName="active">paleontológica</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ConvalidacionTitulo" activeClassName="active">Zoología</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="postgrado" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <strong>Unidad de Paleontología</strong>
                                    <p>
                                    Desarrolla y conserva colecciones científicas de referencia de fósiles invertebrados y vertebrados. Desarrolla actividades de curaduría e investigación paleontológica en territorio nacional, y genera información científica sobre el pasado biológico del país. Contribuye al control y supervisión de las actividades paleontológicas en territorio nacional, velando por el uso racional y correcto del registro fósil, cualquiera sea el estado y forma en que se encuentren.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{ marginTop: 400 }}>
                < Footer />
            </div>
        </Fragment>
    );
}

export default Posgrado;