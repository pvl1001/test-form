import s from "./BtnBack.module.scss";
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow.svg'


function BtnBack( { className = '', onClick }: {
   className?: string
   onClick: () => void
} ) {
   return (
      <button
         type="button"
         className={ `${ s._ } ${ className }` }
         onClick={ onClick }
      >
         <ArrowIcon/> Back
      </button>
   )
}


export default BtnBack;