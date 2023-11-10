//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seconds= 0
 let seconds2=0 
 let minutes=0
 let minutes2=0
 let hours=0
 let hours2 = 0;
setInterval(()=> {
    seconds++
   if (seconds >= 10){
   seconds = 0 
   seconds2++
   }
   if (seconds2 >= 6){
    seconds2 = 0
    minutes++
   }
   if(minutes >= 10){
    minutes= 0
    minutes2++
   }
   if (minutes2 >= 6){
   minutes2= 0
   hours++
   }
  if(hours >= 10){
    hours = 0
    hours2++
  }
if(hours2 >= 9){
    seconds = 0
    seconds2 = 0
    minutes = 0
    minutes = 0
    hours = 0
    hours2 = 0
}

    
    
    ReactDOM.render(<Home 
        
        seconds={seconds}
        seconds2={seconds2} 
        minutes={minutes} 
        minutes2={minutes2}
        hours={hours}
        hours2={hours2}
         />, document.querySelector("#app"));

}, 1000);

