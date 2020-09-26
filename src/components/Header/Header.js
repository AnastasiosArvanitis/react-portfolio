import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';


import HeaderLink from './HeaderLink';
import DrawerLinks from '../DrawerLinks/DrawerLinks';

import './Header.scss';

const useStyles = makeStyles({
    paperAnchorRight: {
      backgroundImage: 'linear-gradient(rgb(9, 9, 85),  rgb(6, 6, 180))',
      border: 0,
      padding: '10px 10px 10px 10px',
      width: '200px'
    }
  });

const Header = () => {

    const navLinks = [
        {
             to: '/',
             label: 'Home',
             icon: <HomeRoundedIcon />
        },
        {
            to: '/About',
            label: 'About',
            icon: <InfoOutlinedIcon />
       },
       {
        to: '/Cv',
        label: 'CV',
        icon: <MenuBookOutlinedIcon />
        },
        {
            to: '/Portfolio',
            label: 'Portfolio',
            icon: <WorkOutlineOutlinedIcon />
       },
       {
        to: '/Contact',
        label: 'Contact',
        icon: <MailOutlinedIcon />
        }
    ];

     const burgerBtnStyles = {
        fontSize: "50px",
        color: "#e6e6e6",
        "&:hover": {
            color: "#2a41eb",
            borderColor: "#2a41eb"
        }
    }; 

    const closeBtnStyles = {
        fontSize: "40px",
        color: "#e6e6e6",
        "&:hover": {
            color: "#2a41eb",
            borderColor: "#2a41eb"
        }
    };


    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        open ? setOpen(false) : setOpen(true);
        console.log('handleDrawer');
    };

    const classes = useStyles();

    return (
       <header>
           <div className="logo">
                <h1>Anastasios Arvanitis</h1>
                <p>Web Developer</p>
           </div>
            <nav>
                <ul>
                    {
                       navLinks.map(item => {
                           return (
                            <HeaderLink
                                key={item.label + 1}
                                activeOnlyWhenExact={true}
                                to={item.to}
                                label={item.label}
                            />
                           )
                       }) 
                    }
                </ul>
            </nav>
            <div className='burgerBtn'>
                <MenuRoundedIcon 
                    onClick={handleDrawer} 
                    style={burgerBtnStyles} 
                />
            </div>
            
            <Drawer
                anchor='right'
                open={open}
                onClose={handleDrawer}
                variant='temporary'
                classes={{
                    paperAnchorRight: classes.paperAnchorRight
                  }}
            >
                <div className='drawer-content'>
                    <div className='drawer-close-btn'>
                        <HighlightOffOutlinedIcon style={closeBtnStyles} onClick={handleDrawer} />
                    </div>
                    
                    {
                    navLinks.map(item => {
                        return (
                            
                            <DrawerLinks
                                icon={item.icon}    
                                key={item.label+1}
                                to={item.to}
                                label={item.label} 
                            />
                        )
                    }) 
                    }
                    
                </div>
            </Drawer>

       </header>
        
    ); 
} 

export default Header;

