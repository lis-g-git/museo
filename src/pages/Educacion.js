import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import img1 from '../img/a1.jpg';
import img2 from '../img/a2.jpg';
import img3 from '../img/a3.jpeg';
import img4 from '../img/a4.jpeg';
import img5 from '../img/a5.jpg';
import img6 from '../img/a6.png';
import img61 from '../img/a7.jpg';
import img7 from '../img/a8.jpg';
import img8 from '../img/m10.jpg';
import img9 from '../img/4.4WELLCAT2006.jpg';
import img10 from '../img/5.1CEMENTACIONREMEDIAL2007.jpg';
import img11 from '../img/5.2CASINGSEATSTRESSCHECK2007.jpg';
import img12 from '../img/5.3PERFENTR2007.jpg';
import img13 from '../img/5.4REVESTIDORES2007_1.jpg';
import img14 from '../img/6WELLCONTROL2011.jpg';
import img15 from '../img/7.1WORKOVER2012_1.jpg';
import img16 from '../img/7.2CASINGSEAT2012.jpg';
import img17 from '../img/7.3STRESSCHECK2012.jpg';
import img18 from '../img/7.4WELLPLAN2012.jpg';
import img19 from '../img/7.5DRILLWORKS2012.jpg';
import img20 from '../img/7.6FRACTURA2012.jpg';
import img21 from '../img/8IICONGRESOSPE2013.jpg';
import img22 from '../img/9MANEJO2014.jpg';
import img23 from '../img/10ENGLISH2018.jpg';

const slideImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img61,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23
];

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


const Educacion = () => {

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
                           
                            <img src={img61} alt="img61" className="imageStyle" />
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
                < Slideshow />
            </div>
            < Footer />
        </Fragment>
    );
}

export default Educacion;