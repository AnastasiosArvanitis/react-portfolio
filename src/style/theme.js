import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(9, 9, 85)'
    },
    secondary: {
      main: '#0f0'
    }
  },
  typography: {
    fontFamily: 'Asap'
  },
  shape: {
    borderRadius: 10
  },
  props: {
    MuiButton: {
      variant: 'filled',
      color: 'primary',
      fullWidth: true
    },
    MuiTextField: {
      variant: 'contained',
      color: 'primary',
      InputLabelProps: {
        shrink: true,
      },
      FormHelperTextProps: {
        color: 'secondary'
      }
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '10px 50px',
        background: "rgb(9, 9, 85)",
        color: '#fff',
        "&:hover": {
          backgroundColor: "rgb(22, 22, 219)"
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: 'primary'
      }
    },
    MuiInputBase: {
      root: {
        color: 'primary'
      }
    },
    MuiOutlinedInput: {
      root: {
        border: 'green'
      }
    }
  } 
});

/* 
  */