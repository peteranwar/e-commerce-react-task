
import { createTheme } from '@material-ui/core/styles';



export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#AFCACD'
    },
    secondary: {
      main: '#cdc9af',
    },
    text: {
      secondary: '#3B3B3B',
    },
  },
  transitions: {
    easing: {
      easeInOut: 'all .5s ease-in-out'
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    h2: {
      fontWeight: '700',
      '@media (max-width: 600px)': {
        fontSize: '2.8rem',
      },
      '@media (max-width: 450px)': {
        fontSize: '1.8rem',
      },
    },
    h6: {
      '@media (max-width: 600px)': {
        fontSize: '1.3rem',
      },
      '@media (max-width: 450px)': {
        fontSize: '1rem',
      },
    },
    caption: {
      fontSize: '1.2rem'
    }
  }
});

theme.props = {

  MuiButton: { // `MuiButton` is the global class name for the <Button /> component

    disableElevation: false, // this prop disables the drop shadow on all Buttons
  },

};

theme.overrides = {

  MuiButton: {

    root: {

      borderRadius: 4, // square corners

      textTransform: 'uppercase', // removes uppercase transformation
      colorInherit: 'white'
    },
  },
};