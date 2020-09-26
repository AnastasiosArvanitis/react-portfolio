import React from 'react';
import {Link} from 'react-router-dom';

import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';

import Card from './Card/Card';
import './Home.scss';

const Home = () => {

    const cardContent = [
        {
            title: 'About',
            link: '/About',
            descr: 'If you want to know more about me...',
            icon: '<HomeOutlined />'
        },
        {
            title: 'CV',
            link: '/Cv',
            descr: 'If you want to see my resume...'
        },
        {
            title: 'Work',
            link: '/Portfolio',
            descr: 'If you want to see my work...'
        },
        {
            title: 'Contact',
            link: '/Contact',
            descr: 'If you want to send me an email...'
        }
    ];

    const iconStyle = {
        fontSize: '10em'
    };

    return (
        <section className='home-section'>

            {cardContent.map((item) => {
                return (
                    <Link key={item.title + 1} to={item.link}>
                    <Card title={item.title} descr={item.descr}>
                    {(() => {
                        if (item.title === 'About') {
                        
                            return (<InfoOutlinedIcon style={iconStyle} />)
                        
                        } else if (item.title === 'CV') {
                        
                            return (<MenuBookOutlinedIcon style={iconStyle} />)
                        
                        } else if (item.title === 'Work') {
                           
                            return (<WorkOutlineOutlinedIcon style={iconStyle} />)
                           
                        } else if (item.title === 'Contact') {
                            
                            return (<MailOutlinedIcon style={iconStyle} />)
                           
                        }
                    })()}
                    </Card>
                    </Link>)
                })}
            
        </section>
         
    );
}

export default Home;

