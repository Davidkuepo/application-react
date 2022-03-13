    import react from 'react';
    //  import './App.css';
    import Nav from './Nav';
    import Connexion from './Connexion';
    import Menu from './Menu';
    import * as React from "react";
    import Inscription from './Inscription';
    import Admin from './Admin';
    import User from './User';
    
import { Routes, Route, Link } from "react-router-dom";
      
    
     function App() {
       return (
        <div className="App">
        
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="Connexion" element={<Connexion />} />
          <Route path="Inscription" element={<Inscription/>} />
         <Route path="User" element={<User/>} />
          <Route path="Menu" element={<Menu/>} />

        </Routes>
      </div>
       );
     }
     
     export default App;
     