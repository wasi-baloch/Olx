import React from 'react';
// import logo from 'whatslogo';
import './App.css';
// import Search from "../src/Search/index";


function Appp() 


{

   
  return (
    <div className="App">
  <div>
 


  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src="https://olx-clone-react.web.app/static/media/logoimg.6e041e26.png"  width={80}  alt="" srcset=""/> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="navbar navbar-light bg-light" >
        <form className="form-inline" >
          <input className="form-control mr-sm-2" type="search" placeholder="Search"  aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search  </button>
        </form>
      </nav>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <a className="nav-link" href=""> <b> Log in </b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.olx.com.pk/account?to=%2Fpos"> <b> Sign in</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.olx.com.pk/account?to=%2Fpost" type="button" className="btn bd-primary">SELL </a>
            </li>
        
          </ul>
        </div>
      </nav>

         </div>
         </div>
  );
}

export default Appp;
