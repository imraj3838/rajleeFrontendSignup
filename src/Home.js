import React from "react";
import './App.css'
import Course from "./Course-card";


function Home(){
    return(
        <>
       <div id="home-page-img">
<h1 id="head">LEARN NEW WAY TO SECURE A JOB</h1>
<p id="p">With Webinars Provided By Rajalee Innovations Pvt Ltd</p>
</div>
 <Course/>
<div id="course-start"><h1>Starts From 15th-May-2024</h1></div>
<div id="joinbtn">
 {/* <button className="btn">JOIN NOW</button> */}
 <a href="https://razorpay.me/@rajlee"> <button className="btn">JOIN NOW</button></a>
 <h1 className="footer">Rajalee Innovations Pvt Ltd </h1>
 <img className="logo1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJT_MijixgNFfAWm79DVJol1fshn1ls3bgaPNJBd_ZpPPShOCCzNJwPmLlK_vuSO0xuU&usqp=CAU" alt="title"/>
</div>
        </>
    )
}
export default Home;