import React from "react";
import './App.css'


function Home(){
    return(
        <>
       <div id="home-page-img">
<h1 id="head">LEARN NEW WAY TO SECURE A JOB</h1>
<p id="p">With Webinars Provided By Rajalee Innovations Pvt Ltd</p>
</div>
<div id="Course">
    <h2 id="coursehead">COURSES</h2>
   <div id="container">
   <div id="course-card">
        <img className= "course-img" src="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg" alt="title"/>
        <p className="para">Web Devlopment Bootcamp</p>
    </div>
    <div id="course-card">
        <img className= "course-img" src="https://i.ytimg.com/vi/wOiEIxbU2eI/maxresdefault.jpg" alt="title"/>
        <p className="para">JavaScript Fundamentals</p>
    </div>
    <div id="course-card">
        <img className= "course-img" src="https://cdn.eduonix.com/assets/images/header_img/2020022708051011716.jpg" alt="title"/>
        <p className="para">React Masterclasses</p>
    </div>
    <div id="course-card">
        <img className= "course-img" src="https://static.skillshare.com/uploads/video/thumbnails/c073470e95824079bc93e74d1bd5bdb5/original" alt="title"/>
        <p className="para">Python Programming</p>
    </div>
    <div id="course-card">
        <img className= "course-img" src="https://i1.wp.com/phdcoding.com/wp-content/uploads/2020/04/what-is-data-science.jpg?fit=1920%2C1080&ssl=1" alt="title"/>
        <p className="para">Data Science</p>
    </div>
    <div id="course-card">
        <img className= "course-img" src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" alt="title"/>
        <p className="para">Java</p>
    </div>
   </div>
   </div>
   <div id="course-start">
<h1>Starts From 15th-May-2024</h1>

   </div>
   <div id="joinbtn">
 <button className="btn">JOIN NOW</button>
 <h1 className="footer">Rajalee Innovations Pvt Ltd </h1>
</div>
        </>
    )
}
export default Home;