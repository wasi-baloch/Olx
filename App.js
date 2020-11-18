import React from 'react';
import './App.css';
import Appp from './Appp.jsx'
import Mobile from './Mobile.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Home from '../components/home'
// import Createadd from '../components/createadd'
// import Signup from '../components/Signup'
// import Postform from '../components/postform'
// import Loggedhome from '../components/loggedhome.js'

function App() 
{

 return (
    
  
    <div className="App">
    
<Appp/>
<Mobile/>
    <Card/>
    <Card/>
    <Footer/>
    
        {/* <Router> */}
         
        {/* <Route exact path='/' component={Home} />
        <Route path='./card' component={card} /> */}
        {/* <Route path='./signup' component={Signup} />
        <Route path='./postform' component={Postform} />
        <Route path='./loggedhome' component={Loggedhome} /> */}
      {/* </Router> */}


    
      </div>
  
  );
}

export default App;
