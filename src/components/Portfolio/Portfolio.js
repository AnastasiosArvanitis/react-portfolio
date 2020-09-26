import React, {Fragement} from 'react';
import {Link} from 'react-router-dom';
import './Portfolio.scss';

import firstStatic from '../../../assets/img/portfolio/firstStatic.jpg';
import paulvidgraincom from '../../../assets/img/portfolio/paulvidgraincom.jpg';
import wpVersion from '../../../assets/img/portfolio/wp_version.jpg';

const Portfolio = () => {
    return (
        <section className='portfolio-section'>
            <h3>Portfolio</h3>

            <Link to={{ pathname: "https://www.anastasios-arvanitis.info/firstStatic/" }} target="_blank" >
                <div className='port port-1'>
                    <img src={firstStatic} alt='First static portfolio' />
                    <p>My first static portfolio using html, css and jQuery.</p>
                </div>
            </Link>

            <Link to={{ pathname: "https://www.paul-vidgrain.com/" }} target="_blank" >
                <div className='port port-2'>
                    <img src={paulvidgraincom} alt='paulvidgrain.com' />
                    <p>My first website using php, mysql and jQuery.</p>
                </div>
            </Link>

            <Link to={{ pathname: "https://anastasios-arvanitis.info/mycvwp/" }} target="_blank" >
                <div className='port port-3'>
                    <img src={wpVersion} alt='wordpress version' />
                    <p>Wordpress version of my portfolio with integrated html and css.</p>
                </div>
            </Link>

            <Link to={{ pathname: "" }}>
                <div className='port port-4'>
                    <p>My blog using nodejs, express and postgreql is currently under constraction...</p>
                </div>
            </Link>
        </section>
    );
}

export default Portfolio;
