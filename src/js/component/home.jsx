import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = (props) => {
	return (
		<div className="timer">
			<span className="fas fa-clock"></span>
			<span>{props.hours2}</span>
			<span>{props.hours}</span>
			<span>{props.minutes2}</span>
			<span>{props.minutes}</span>
			<span>{props.seconds2}</span>
			<span>{props.seconds}</span>
		</div>
	);

};

export default Home;
