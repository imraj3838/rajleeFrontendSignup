// import React from "react";

// function ActiveCard({ activeCard, courses }) {
//     return (
//         <>
//             {activeCard !== null && (
//                 <div id="active-course">
//                     <img className="course-img" src={courses[activeCard].image} alt="title" />
//                     <p className="para">{courses[activeCard].title}</p>
//                 </div>
//             )}
//         </>
//     );
// }

// export default ActiveCard;


import React, { useState } from "react";

function ActiveCard() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        setActiveCard(index === activeCard ? null : index);
 } };


<div >
{ActiveCard !== null && (
    <div id="active-course">
        <img className="course-img" src={courses[ActiveCard].imgSrc} alt="title" />
        <p className="para">{courses[ActiveCard].title}</p>
    </div>
)}

</div>
export default ActiveCard;