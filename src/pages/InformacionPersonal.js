import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/App.css';
import { Col,Container,Row } from "react-bootstrap";

import Header from '../components/Header';
import Footer from '../components/Footer';

import img1 from '../img/im1.jpg';
import img2 from '../img/im2.jpg';
import img3 from '../img/im3.jpg';
import img4 from '../img/im4.jpg';

const slideImages = [
    img1,
    img2,
    img3,
    img4
];

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const InformacionPersonal = () => {

    const Slideshow = () => {
        return (
                <div className="containerSlideshow">
                <Slide {...proprietes} >
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Botanica</strong></span>
                            <img src={slideImages[0]} alt="img1" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Zoologia</strong></span>
                            <img src={img2} alt="img2" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>invertebrados</strong></span>
                            <img src={img3} alt="img3" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Portada</strong></span>
                            <img src={img4} alt="img4" className="imageStyle" />
                        </div>
                    </div>
                </Slide>
            </div>
        );
    }

    return (
        <Fragment>
            <div className="App">
                < Header />
                <div className="panel" >
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
                < Slideshow />
            </div>
            < Footer />
        </Fragment>
    );
}

export default InformacionPersonal;