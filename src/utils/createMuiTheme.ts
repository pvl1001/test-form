import { createTheme } from "@mui/material";


export default createTheme( {
   palette: {
      primary: {
         light: '#757ce8',
         main: '#7C55C5',
         dark: '#002884',
         contrastText: '#fff',
      },
      secondary: {
         light: '#ff7961',
         main: '#f44336',
         dark: '#ba000d',
         contrastText: '#000',
      },
   },
   components: {
      // Name of the component
      MuiInputBase: {
         styleOverrides: {
            root: {
               fontFamily: 'Montserrat',
               fontSize: 20,
            }
         },
      },
   },
} )
