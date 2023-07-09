import s from "./Progress.module.scss";
import { TStep } from "../../types";


function Progress( { step, className }: {
   className?: string
   step: TStep
} ) {
   return (
      <ul className={ `${ s._ } ${ className }` }>
         { Array( 4 ).fill( '' ).map( ( _, i ) => {
            const activeClass = step >= i + 1 ? s.active : ''
            return <li key={ i } className={ `${ s.item } ${ activeClass }` }/>
         } ) }
      </ul>
   )
}


export default Progress;