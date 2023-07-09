import { createContext } from "react";
import { TOrder, TOrdersContext } from "../types";


const initialStateContext: TOrdersContext = {
   order: {} as TOrder,
   // eslint-disable-next-line
   setOrder: ( data: TOrder ) => undefined
}


export const FormContext = createContext<TOrdersContext>( initialStateContext )
