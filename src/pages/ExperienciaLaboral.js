import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import img1 from '../img/procesoPerforacion1.jpg';
import img2 from '../img/procesoPerforacion2.jpg';
import img3 from '../img/procesoPerforacion3.jpg';
import img4 from '../img/procesoPerforacion4.jpg';

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

const ExperienciaLaboral = () => {

    const Slideshow = () => {
        return (
            <div className="containerSlideshow">
                <Slide {...proprietes} >
                    <div className="each-slide">
                        <div>
                        <iframe width="368" height="221" src="https://www.youtube.com/embed/aLAQqgutZDg" title="¿Insectos, alimentación del futuro? &quot;Kuru&quot; una alternativa para clientes audaces" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                        <iframe width="368" height="221" src="https://www.youtube.com/embed/0zCKURgCwOw" title="PLANTAS CONDIMENTICIAS-MNHN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                        <iframe width="368" height="221" src="https://www.youtube.com/embed/fJJzSTRL-fk" title="VIDEO COLECCIÓN CIENTÍFICA DE  ENTOMOLÓGICA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <form className='form'>
               <label>
                  Nombre Completo:
                  <input type="text" name="name" />
                    </label>
                     <label>
                  Correo:
                  <input type="text" name="correo " />
                    </label>
                    <label>
                  Sugerencia :
                  <input type="text" name="sugerencia" />
                    </label>
                    <input type="Enviar" value="Enviar" />
                 </form>
    
                </div>
               
                < Slideshow />
            </div>
            < Footer />
        </Fragment>
    );

}


export default ExperienciaLaboral;
