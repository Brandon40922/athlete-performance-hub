
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WorkoutProvider } from './contexts/WorkoutContext';
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WorkoutProvider>
        <App />
      </WorkoutProvider>
    </BrowserRouter>
  </React.StrictMode>
);
