import ReactDOM from 'react-dom/client';

import './index.css';

//for javascript files we omit the .js i think thats just a convention thing but still.
import App from './App';
//the ./ in app import means to look in the same folder as this index.js 
const root = ReactDOM.createRoot(document.getElementById('root'));

//We will be using app as the main entry way kind of thing. index atm will just do this and render the app, 
//then app will have components added onto that so then app will render itself, then it will render individual components
//to then build up more and more (similar to c++ with multiple inheritance building a ai with individual state machine, locomotion, stats etc).
root.render(<App />);
