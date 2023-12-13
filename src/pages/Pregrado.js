import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';


const Pregrado = () => {
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
                <div id="pregrado" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p>
                                    La Unidad de Botánica enmarca sus actividades en la investigación científica y difusión sobre la diversidad de la flora en las ecoregiones del Altiplano, Valles, Yungas, Amazonía y Chaco del territorio boliviano para la conservación, gestión y movilización del conocimiento a través de:

Desarrollo y mantenimiento de colecciones científicas, mediante la recolección de muestras botánicas, manejo de herbario: Prensado, secado, organización, identificación, elaboración de fichas técnicas, base de datos y montaje que constituye un registro permanente de la flora y vegetación boliviana en convenio con el Herbario Nacional de Bolivia (LPB).

Difusión del conocimiento de la flora y vegetación generado a través de investigaciones realizadas en formato de: libros, capítulo de libro, artículos científicos, notas técnicas y científicas, guías, folletos, infografías, post. En presentaciones orales, seminarios, congresos, capacitaciones, cursos, entre otros, destinado a diferentes sectores de la población boliviana.

Gestión en el proceso de investigación, cooperación interinstitucional a solicitud de entidades públicas y privadas referidas a biodiversidad.

Investigación en el área de taxonomía, de plantas vasculares mediante la descripción y registro de nuevos taxones. Caracterización de flora y vegetación en diferentes formaciones vegetales. Etnobotánica, en la documentación de los conocimientos tradicionales y locales de las plantas útiles: Medicinales, comestibles, construcción, entre otros. La biología y ecología de especies de flora y de comunidades vegetales como base para su conservación, uso y aprovechamiento sustentable del patrimonio vegetal del país.
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

export default Pregrado;