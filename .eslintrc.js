module.exports = {
   "env": {
      "browser": true,
      "es2021": true,
      "node": true,
   },
   "settings": {
      "react": {
         "version": "detect"
      }
   },
   "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:@typescript-eslint/recommended"
   ],
   "parser": "@typescript-eslint/parser",
   "parserOptions": {
      "ecmaFeatures": {
         "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
   },
   "plugins": [
      "react",
      "@typescript-eslint"
   ],
   "rules": {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "no-debugger": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
   }
}
