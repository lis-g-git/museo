import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const ComvalidacionTitulo = () => {
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
                                <NavLink to="/Posgrado" activeClassName="active">Paleontología</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ConvalidacionTitulo" activeClassName="active">Zoología</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div id="convalidacion" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <strong>Unidad de Zoología</strong>
                                    <p>
                                    Desarrolla actividades de curaduría e investigación científica, básica y aplicada sobre la fauna de Mamíferos, Aves, Anfibios, Reptiles, Peces e Invertebrados de Bolivia.
                                    </p>
                                    <p>
                                    En el marco del convenio con la Colección Boliviana de Fauna (CBF) mantiene una colección científica de vertebrados de más de 203.966 especímenes distribuidos en 2.167 especies que representan el 70% de la fauna reportada para Bolivia; se cuenta también con 300.000 especímenes de invertebrados que representan aproximadamente a 10.000 especies.
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

export default ComvalidacionTitulo;