import React from 'react';
import AnastasiosArvanitis from '../../../assets/img/AnastasiosArvanitis.jpg';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import './About.scss';

const About = () => {

    const iconStyle = {
        fontSize: '25px',
        paddingTop: '12px'
    };

    return (
        <section className='about-section'>
            <h1>Hello, I am Anastasios </h1>
            <h3>Welcome to my web site <SentimentSatisfiedOutlinedIcon className='about-smile' /></h3>

            <div className='photo-div'>
                <img 
                    className='photo-profil' 
                    src={AnastasiosArvanitis} 
                    alt='Anastasios Arvanitis' 
                />
            </div>
            
            <p>Web developer between 2000 and 2005 that is returning to business. I have passed the last 12 months searching a developer’s school and bringing me up to level, studying alone. But as much as I was advancing and as much I was discovering all the new possibilities I was getting more and more pationated and wanted to try all the new features.</p>
            <p>I have been working a lot on javaScript, client and server side, and on the React.js framework. Moreover I have worked a lot on the responsive web design, trying to build a solid understanding of the mobile first way of thinking and I have worked a bit with php building a website in php and mySQL.</p>
            <p>I had also the opportunity to work on the apache administration and on SQL and plpgsql with postgreSQL, taking this two courses on CNAM. I have used all the resources out there including openclassrooms, freeCodeCamp, Udemy, countless youtube channels and so on.</p>
            <p>In my life I have tried many and different things and I have worked with a lot of people. Adaptation has become my second nature and working hard and always learning and improving have become my most important values.</p>
            <p>I will be looking for a traineeship (stage) at the end of my courses at Eni in Nantes for the months of april and may 2021 and I will be available for a contract of web developer on june 2021.<br/><br/>Thank you for reading!!</p>
            
        </section>
        
    );
}
    
    
     
export default About;

