import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Compnent/Navbar';
import FetchApi from './Compnent/FetchApi';
import Footer from './Compnent/Footer';

const App = () => {
  return (
   <>
     <Router>
      <Navbar/>
      <Routes>
        <Route  path="/general" element={<FetchApi changes="general"/> }/>
        <Route  path="/sport" element={<FetchApi changes="sport"/> }/>
        <Route  path="/technology" element={<FetchApi changes="technology"/> }/>
        <Route  path="/business" element={<FetchApi changes="business"/> }/>
        <Route  path="/health" element={<FetchApi changes="business"/> }/>
      </Routes>
      <Footer/>
    </Router> 
   
   </>
  );
};

export default App
