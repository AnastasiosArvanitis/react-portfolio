import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonStyle: (props) => {
      
      return {
        backgroundColor: props.cool ? "blue" : "red",
        color: props.cool ? "white" : "yellow",
        textTransform: "none"
      };
      
      
    },
  });

const SubmitButton = (props) => {

    const classes = useStyles(props);

    return (
        <>
        
        </>
    );
};

export default SubmitButton;