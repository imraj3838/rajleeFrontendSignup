import React  from "react";
import { BrowserRouter, Route, Routes ,Link} from "react-router-dom";
import Home from "./Home";
import About from './About'
import JoinUs from './JoinUs'
import Contact from './Contact'
import Singup from './Singup'
import Login from "./Login";


import './App.css'
function App(){
    return(
        <>
        <BrowserRouter>
        <div id="navbar"> 
        <Link className="tag" to='/' >Home</Link>
         <Link className="tag" to='/About'>About</Link>
         <Link className="tag" to='/JoinUS'>JoinUs</Link>
         <Link  className="tag" to='/Contact'>Contact</Link>
           <Link className="tag" to='/Singup'>Signup</Link>
        </div>
        <Routes>
            <Route path = '/'  element={<Home/>}/>
            <Route path='/About' element= {<About/>}  />
            <Route path='/Joinus' element={<JoinUs/>}  />
            <Route path='/Contact' element={<Contact/>}  />
            <Route  path='/Singup' element={<Singup/>}/>
            <Route  path='/login' element={<Login/>}/>
            
           
        </Routes>
        </BrowserRouter>
       
        </>
    )
}
export default App;

