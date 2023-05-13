import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Components/Dashboard/Dashboard';
import Popup from './Components/Popup/Popup'
import UpdateQuestion from './Components/UpdateQuestion/UpdateQuestion'
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Dashboard></Dashboard> */}
    <Popup></Popup>
    {/* <UpdateQuestion></UpdateQuestion> */}
  </React.StrictMode>
);

