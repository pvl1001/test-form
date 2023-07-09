export default function regexNumber( value: string ): string {
   return value.replace( /[^\d.]/g, "" )
}