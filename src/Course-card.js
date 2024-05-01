// import React ,{useState} from "react";
// import './App.css'
// function Course( ){
//    let [activeCardIndex,setActiveCardIndex]= useState(null)
//    console.log(activeCardIndex)
//     const Coursedetails =[
//             {
//                 index: 0,
//                 image: "https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg",
//               title: "Web Development Bootcamp"
//             },
//             {
//                 index: 1,
//                 image: "https://i.ytimg.com/vi/wOiEIxbU2eI/maxresdefault.jpg",
//               title: "JavaScript Fundamentals"
//             },
//             {
//                 index: 2,
//                 image: "https://cdn.eduonix.com/assets/images/header_img/2020022708051011716.jpg",
//               title: "React Masterclasses"
//             },
//             {
//                 index: 3,
//               image :"https://static.skillshare.com/uploads/video/thumbnails/c073470e95824079bc93e74d1bd5bdb5/original",
//               title: "Python Programming"
//             },
//             {
//                 index: 4,
//                 image: "https://i1.wp.com/phdcoding.com/wp-content/uploads/2020/04/what-is-data-science.jpg?fit=1920%2C1080&ssl=1",
//               title: "Data Science"
//             },
//             {
//                 index: 5,
//                 image: "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
//               title: "Java"
//             }
//           ];
          
//     return(
//         <>
//         <h1 id="coursehead">COURSES</h1>
//         <div id="container" >
//             {
              
//               Coursedetails.map((Course,index)=>{
//                     return(
                        
//                         <div id="course-card" key={index} onClick={() => {
//                             console.log("Card clicked");
//                             setActiveCardIndex(index);
//                           }}>
//                             <div className = {`card ${index === activeCardIndex ? `active-card`:""}`}>
//                         <img className ="course-img" src= {Course.image} alt="title"/>
//                         <p className="para">{Course.title}</p>
//                         </div>
//                         </div>
//                     )
//                 })
//                 }
          
//         </div>
//         </>
//     )
// }
// export default Course;


import React, { useState } from "react";
import './App.css'

function Course() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const Coursedetails = [
    {
      index: 0,
      image: "https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg",
      title: "Web Development Bootcamp",
      description: "This bootcamp covers the fundamentals of web development including HTML, CSS, and JavaScript.",
    },
    {
      index: 1,
      image: "https://i.ytimg.com/vi/wOiEIxbU2eI/maxresdefault.jpg",
      title: "JavaScript Fundamentals",
      description: "Learn the basics of JavaScript programming language, including variables, loops, and functions.",
    },
    {
      index: 2,
      image: "https://cdn.eduonix.com/assets/images/header_img/2020022708051011716.jpg",
      title: "React Masterclasses",
      description: "Master ReactJS framework with comprehensive classes covering state management, hooks, and more.",
    },
    {
      index: 3,
      image: "https://static.skillshare.com/uploads/video/thumbnails/c073470e95824079bc93e74d1bd5bdb5/original",
      title: "Python Programming",
      description: "Dive into the world of Python programming with hands-on projects and practical examples.",
    },
    {
      index: 4,
      image: "https://i1.wp.com/phdcoding.com/wp-content/uploads/2020/04/what-is-data-science.jpg?fit=1920%2C1080&ssl=1",
      title: "Data Science",
      description: "Explore data science concepts including machine learning, data visualization, and predictive analytics.",
    },
    {
      index: 5,
      image: "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
      title: "Java",
      description: "Learn Java programming language from basics to advanced topics including object-oriented programming and multithreading.",
    }
  ];

  return (
    <>
      <h1 id="coursehead">COURSES</h1>
      <div id="container">
        {Coursedetails.map((Course, index) => {
          return (
            <div id="course-card" key={index} onClick={() => setActiveCardIndex(index)}>
              <div className={`card ${index === activeCardIndex ? "active-card" : ""}`}>
                <img className="course-img" src={Course.image} alt="title" />
                <div className="card-details">
                  <h2 className="course-title">{Course.title}</h2>
                  <p className="course-description">{index === activeCardIndex ? Course.description : ''}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Course;
