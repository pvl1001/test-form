import ReactDOM from 'react-dom/client';
import './assets/styles/main.scss';
import App from './components/App/App';


const root = ReactDOM.createRoot(
   document.getElementById( 'root' ) as HTMLElement
);
root.render(
   // <React.StrictMode>
   <App/>
   // </React.StrictMode>
);

