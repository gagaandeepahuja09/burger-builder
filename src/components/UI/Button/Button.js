import React from 'react';
import but from './Button.css';

const button = (props) => (
	<button
	disabled = {props.disabled}
	className = {[but.Button,but[props.btnType]].join(' ')} 
	onClick = {props.clicked}>{props.children}</button>
);

export default button;