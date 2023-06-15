import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AllData from './Componnat/Content/AllData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // this is for Update Current path 
    <AllData> 
        <App />

    </AllData>

);

