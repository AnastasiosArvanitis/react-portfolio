import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
    ListItem,
    List,
    ListItemIcon,
    ListItemText
  } from "@material-ui/core";

import './DrawerLinks.scss';

const useLinksStyles = makeStyles({
    root: {
      color: '#eca400',
      fontFamily: 'Asap',
      fontSize: '100px'
    }
  });

const DrawerLinks = ({ label, to, icon }) => {

    const classesLinks = useLinksStyles();

    return (
        <>
            <Link 
                to={to}
            >
                <List> 
                    <ListItem button key={label}>
                        <ListItemIcon
                            classes={{
                                root: classesLinks.root
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={label}
                            classes={{
                                root: classesLinks.root
                            }}
                        />
                    </ListItem>
                </List>
            </Link> 
        </>
    )
    
}


export default DrawerLinks;