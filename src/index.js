import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    types,
    transitions,
    positions,
    Provider as AlertProvider,
} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
    position: positions.MIDDLE,
    timeout: 3000,
    offset: '30px',
    transition: transitions.SCALE,
    type: types.ERROR,
};

const BaseApp = () => (
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
    </AlertProvider>
);
ReactDOM.render(<BaseApp />, document.getElementById('root'));
