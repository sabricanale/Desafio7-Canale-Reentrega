import React from "react";
import './Title.css'

const Title = (props) => {
	return (
	<>
		<h2 className='titulo'>
			{props.greeting}  
		</h2>
	</>
	)
};

export default Title;
