import React from 'react';
import CvCard from './cv-card';
import {cvFormation, cvExperiance} from '../../content/cv_content';
import act from '../../../assets/img/cv/activites.png';
import lang from '../../../assets/img/cv/langue.png';
import './Cv.scss';

const Cv = () => {
    
    const titles = {
        for: 'Formation',
        exp: 'Experience'
    }

    return (
        
        <section className='cv-section'>
            <div className='cv-content'>
                <h3 className='title'>{titles.for}</h3>
                {cvFormation.map(item => {
                    return (
                    <CvCard    
                        key={item.id}
                        date={item.date}
                        content={item.content}
                    />
                    )
                    })
                }
            </div>

            <div className='cv-content'>
                <h3 className='title'>{titles.exp}</h3>
                {cvExperiance.map(item => {
                    return (
                    <CvCard    
                        key={item.id}
                        date={item.date}
                        content={item.content}
                    />
                    )
                    })
                }
            </div>

            <div className='cv-other'>  
                <div>
                    <h4>Trilingue</h4>
                    <img src={lang} alt='Languages' />
                </div>
                <div>
                <h4>Autres activité</h4>
                    <img src={act} alt='Activities' />
                </div>
            </div>
        </section>
   
    );
}
export default Cv;

