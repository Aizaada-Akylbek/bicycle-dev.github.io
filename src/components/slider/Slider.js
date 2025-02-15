// import React, { useState, useEffect } from "react";
// //img
// import samsung from "../../assets/companyLogos/samsung.png";
// import google from "../../assets/companyLogos/google.svg";
// import lg from "../../assets/companyLogos/lg.svg";
// import microsoft from "../../assets/companyLogos/microsoft.svg";
// import slack from "../../assets/companyLogos/slack.svg";
// import sony from "../../assets/companyLogos/sony.png";
// //css
// import "./Slider.css";

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [samsung, google, microsoft, lg, slack, sony];
//   const slideCount = slides.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
//     }, 4000); // Adjust the interval duration (in milliseconds) based on your preference

//     return () => clearInterval(interval);
//   }, [slideCount]);

//   return (
//     <div className="slider">
//       <Marquee velocity={50}>
//         {slides.map((img, index) => (
//           <div key={index} className="slide">
//             <img src={img} alt="company" />
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default Slider;
