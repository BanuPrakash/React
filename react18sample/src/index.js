import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import BaseComponent from './components/BaseComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(<BaseComponent />)


// ReactDOM.render(<App/>, document.getElementById("root"));
