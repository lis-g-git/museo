import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const DatosPerfilLaboral = () => {
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
                                <NavLink to="/Perfil" activeClassName="active">Galeria y Mision</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
            <div className="panel">
                <div>
                    <nav id="menu3">
                        <ul>
                            <li>
                                <NavLink to="/DatosPerfilLaboral" activeClassName="active">MISION</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p><strong>MISION:</strong><br />
                                    Somos una institución pública descentralizada de investigación, preservación y custodia del patrimonio natural y cultural del Estado Plurinacional de Bolivia y de educación ambiental y paleontológica, que coadyuva a la sustentabilidad de los componentes, zonas y sistemas de vida de la Madre Tierra a través del desarrollo y manejo de colecciones científicas sobre fauna, flora, fósiles y la información asociada; la generación y movilización del conocimiento científico; la documentación, recuperación y preservación de los saberes locales y los conocimientos ancestrales; y la educación ambiental y paleontológica. Para ello se asienta sobre los principios de integralidad, diálogo de saberes, justicia social y participación plural, promoviendo en particular un mayor acceso y participación de niñas y mujeres en ciencia para la reducción de las desigualdades persistentes.             
                                    </p>
                                                        
                                </td>
                            </tr>
                            <tr>
                                <td className="oce-first">
                                    <strong>VISION</strong> 
                                    <p>
                                    Al 2030 consolidarse como una institución referente a nivel nacional e internacional en materia de sustentabilidad de los componentes, zonas y sistemas de vida de la Madre Tierra con capacidades fortalecidas de manejo de colecciones científicas sobre fauna, flora y fósiles, investigación científica, diálogo se saberes, generación y movilización del conocimiento y educación ambiental y paleontológica.
                                    </p>
                                                    </td>
                            </tr>
                            <tr>
                                <td className="oce-first">
                                    <strong>Historia</strong> 
                                    <p>
                                    La idea de creación del Museo Nacional de Historia Natural (MNHN) comienza en 1978, cuando la Compañía de Jesús concede a la Academia Nacional de Ciencias de Bolivia, el fruto de cuarenta años de trabajo del Padre Antonio María Sempere, traducido en colecciones de fósiles (la llamada colección Echazu), moluscos, reptiles, aves e insectos que se encontraban en el Museo Sempere del Colegio San Calixto.
                                    </p>
                                    <p>
                                    En 1979, se conforma la Unidad de Zoología a partir de las colecciones Sempere y Castillo, muestras taxidermizadas para exhibición y compuestas básicamente por especímenes de aves y mamíferos.
                                    </p>
                                    <p>
                                    En 1980 el Museo Nacional de Historia Nacional inaugura un nuevo edificio destinado a su sala de exposiciones denominado Padre Antonio Maria Sempere, sus actividades científicas y museográficas de ahí en más se han ido desarrollando paulatinamente.
                                    </p>
                                    <p>
                                    En 1980, la Academia Nacional de Ciencias de Bolivia con el propósito de formar un Museo Nacional de Historia Natural, incorpora estudiantes de la Carrera de Biología al trabajo que venia realizando la Unidad de Zoología, impulsando de esta manera el desarrollo de las colecciones científicas. En el mismo año se fueron desarrollando también las colecciones científicas del Herbario del museo, mediante un convenio entre la Academia Nacional de Ciencias de Bolivia y el Missouri Botanical Garden de Estados Unidos.
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

export default DatosPerfilLaboral;