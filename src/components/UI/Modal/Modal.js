import React from 'react';
import mod from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
	<div>
		<Backdrop show = {props.show} clicked = {props.modalClosed}/>
		<div className = {mod.Modal}
			style = {{
			 	transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
			 	opacity: props.show ? '0.9' : '0'
			}}>
			{props.children}
		</div>
	</div>
);

export default modal;