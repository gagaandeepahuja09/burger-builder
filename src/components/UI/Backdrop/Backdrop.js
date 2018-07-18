import React from 'react';
import bd from './Backdrop.css';

const backdrop = (props) => (
	props.show ? <div className = {bd.Backdrop}
	onClick = {props.clicked}
	></div> : null
	);

export default backdrop;	