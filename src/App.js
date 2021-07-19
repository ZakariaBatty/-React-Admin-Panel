import React from 'react';
import "./app.css"
import { Topbar, Sidebar } from 'components';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
