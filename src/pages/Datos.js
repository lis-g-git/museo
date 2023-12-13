import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import {obtenerEdad} from '../helper';

import Footer from '../components/Footer';

const birthYear = "1976-9-23";

const Datos = () => {

    const datosDate = obtenerEdad(birthYear);

    let misDatos = {
        dia: datosDate[0].dia,
        mes: datosDate[1].mesString[0].stringMes,
        ano: datosDate[0].ano,
        edad: datosDate[3]
    }

    return (
        <Fragment>
            <div className="App">
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
                                    <NavLink to="/Personal" activeClassName="active">Informacion</NavLink>
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
                                    <NavLink to="/Datos" >Datos Personales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Direccion" >Dirección</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contacto" >Datos de Contacto</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="box-textos" >
                        <table id="one-column-emphasis">
                            <tbody>
                                <tr>
                                    <td className="oce-first">
                                        <p>
                                            <strong>Nombres:</strong> Lisbeth Nicole <br />
                                            <strong>Apellidos:</strong> Cano Quispe <br />
                                            <strong>Pais de Nacimiento:</strong> Bolivia <br />
                                            <strong>Departamento</strong> Lapaz <br />
                                            <strong>Nacionalidad:</strong> Boliviana <br />
                                            <strong>Tipo Documento:</strong> Cedula <br />
                                            <strong>Numero Documento:</strong> 9907502 <br />
                                            <strong>Edad</strong> 24 años <br />
                                            <strong>Estado Civil:</strong> Soltera <br />
                                            <strong>Genero:</strong> Mujer <br />
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 400 }}>
                < Footer />
            </div>
        </Fragment>
    );
}

export default Datos;