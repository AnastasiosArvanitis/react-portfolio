import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { useArrowWhiteButtonStyles } from '@mui-treasury/styles/button/arrowWhite';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const DrawerCloseButton = (props) => {
  const classes = useArrowWhiteButtonStyles();
  const gutterStyles = usePushingGutterStyles({
    firstExcluded: true,
    space: 2,
  });

  return (
    <Box className={gutterStyles.parent}>
      <Button classes={classes} onClick={handleDrawer}>
        <KeyboardArrowRight />
      </Button>
    </Box>
  );
};

export default DrawerCloseButton;