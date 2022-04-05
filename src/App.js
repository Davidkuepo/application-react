    import react from 'react';
    //  import './App.css';
    import Connexion from './connexion';
    import * as React from "react";
    import Inscription from './inscription';
    import User from './User';
import { Routes, Route, Link } from "react-router-dom";
import Service from './Page/Service';
import Utilisateur from './Page/Utilisateur';
import Groupeutilisateur from './Page/Groupeutilisateur';
import Election from './Page/Election';
import Activite from './Page/Activite';
import Cotisation from './Page/Cotisation';
import Navbar from './Page/Navbar';
// import Footer from './Page/Footer';
import Settings from './Page/Settings';
import Menu from './Page/Menu';
     function App() {
       return (
         
        <div className="App">
        
        <Routes>
          <Route path="/" element={< Inscription/>} />
          <Route path="Connexion" element={<Connexion />} />
         <Route path="User" element={<User/>} />
         <Route path="Utilisateur" element={<Utilisateur/>} />
         <Route path="Groupeutilisateur" element={<Groupeutilisateur/>} />
         <Route path="Service" element={<Service/>} />
         <Route path="Election" element={<Election/>} />
         <Route path="Activite" element={<Activite/>} />
         <Route path="Cotisation" element={<Cotisation/>} />
         <Route path="Navbar" element={<Navbar/>} />
     {/* <Route path="Footer" element={<Footer/>} /> */}
         <Route path="Settings" element={<Settings/>} />
         <Route path="Menu" element={<Menu/>} />
        </Routes>
        
  
      </div>
       );
     }
     
     export default App;
     