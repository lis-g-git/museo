import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import img1 from '../img/im5.jpg';
import img2 from '../img/m6.png';
import img3 from '../img/m7.jpg';
import img4 from '../img/m8.jpeg';
import img5 from '../img/m9.jpg';
import img6 from '../img/m10.jpg';
import img7 from '../img/m11.jpg';

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

const PerfilLaboral = () => {

    const Slideshow = () => {
        return (
            <div className="containerSlideshow">
                <Slide {...proprietes} >
                    <div className="each-slide">
                        <div>
                
                            <img src={slideImages[0]} alt="img1" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            
                            <img src={img2} alt="img2" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            
                            <img src={img3} alt="img3" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            
                            <img src={img4} alt="img4" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            
                            <img src={img5} alt="img5" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            
                            <img src={img6} alt="img6" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            
                            <img src={img7} alt="img7" className="imageStyle" />
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
                                <NavLink to="/DatosPerfilLaboral" activeClassName="active">Mision</NavLink>
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

export default PerfilLaboral;