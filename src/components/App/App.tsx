import s from './App.module.scss';
import UserForm from "../UserForm/UserForm";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider } from "@mui/material";
import theme from '../../utils/createMuiTheme';
import { useState } from "react";
import { TOrder } from "../../types";
import { FormContext } from "../../context/FormContext";


function App() {
   const [ order, setOrder ] = useState<TOrder>( {} as TOrder )
   return (
      <ThemeProvider theme={ theme }>
         <LocalizationProvider dateAdapter={ AdapterDayjs }>
            <FormContext.Provider value={ { order, setOrder } }>

               <div className={ s._ + ' wrapper' }>
                  <UserForm/>
               </div>

            </FormContext.Provider>
         </LocalizationProvider>
      </ThemeProvider>
   )
}

export default App;
