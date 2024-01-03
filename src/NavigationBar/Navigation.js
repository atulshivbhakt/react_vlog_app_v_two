import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../AllComponents/Home";
import Bollywood from "../AllComponents/Bollywood";
import Technology from "../AllComponents/Technology";
import Hollywood from "../AllComponents/Hollywood";
import Fitness from "../AllComponents/Fitness";
import Food from "../AllComponents/Food";
import Storedata from "../Routes/Storedata";
import UsedataDynamically from "../Routes/Dynamicdata";
import Footer from "../Footer/Footer";


const NavBar = () => {

  const [open, setopen] = useState(true);

  const toggleMenu = () => {
    setopen(!open);
    console.log(open)
  };
  const closenavigate = () => {
    setopen(true);
    console.log(open)
}

  return (
    <>
    <div className="Wrap">
    <div className="logo">
        <span className="The">THE</span>
        <span className="siren">SIREN</span>
         
      <div className='hamburgermenu' onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
     
      <BrowserRouter>
        <div className={open ? "Navbar Navbar2" : "Navbarnone"} >
          <div className="NavTools">
            <Link to="/" className="Home" onClick={closenavigate}>Home</Link>
          </div>
          <div className="NavTools">
            <Link to="/bollywood" onClick={closenavigate}>Bollywood</Link>
          </div>
          <div className="NavTools">
            <Link to="/technology" onClick={closenavigate}>Technology</Link>
          </div>
          <div className="NavTools">
            <Link to="/hollywood" onClick={closenavigate}>Hollywood</Link>
          </div>
          <div className="NavTools">
            <Link to="/fitness" onClick={closenavigate}>Fitness</Link>
          </div>
          <div className="NavTools">
            <Link to="/food" onClick={closenavigate}>Food</Link>
          </div>
        </div>
        <Storedata>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path="/Details/:id" element={<UsedataDynamically />} />
          </Routes>
        </Storedata>
      </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};

export default NavBar;
