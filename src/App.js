
import { BrowserRouter as Router,Routes,Switch, Route } from 'react-router-dom';


import React from "react";
import FAQ from "./FAQ";
import Header from './Header';
import Hero from './Hero';
import NFTS from "./NFTS";
import Roadmap from "./Roadmap";
import Footer from './Footer';
import MintButton from "./MintButton";
import MintPage from "./Mintpage";



const App = () => {

	return (
    
    <div className="min-h-screen text-white selection:bg-indigo-500 selection:text-white">
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <NFTS />
              <Roadmap />
              <FAQ />
            </>
          } 
        />
        <Route path="/mint" element={<MintPage />} />
        
      </Routes>
      <Footer />
    </Router>
  </div>

         

        






   

 

	);
};

export default App;
