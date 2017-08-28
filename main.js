import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Abc from './views/Abc.jsx';
import Styling from './views/Styling.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Abc />, document.getElementById('app1'));
ReactDOM.render(<Styling />, document.getElementById('app2'));
