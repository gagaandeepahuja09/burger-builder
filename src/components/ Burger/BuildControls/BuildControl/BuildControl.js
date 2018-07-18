import React from 'react';
import bc from './BuildControl.css';

const buildControl = (props) => (
	<div className = {bc.BuildControl}>
		<div className = {bc.Label}>{props.label}</div>
		<button className = {bc.More} onClick = {props.added}>+</button>
		<button className = {bc.Less} onClick = {props.removed} disable = {props.disabled}>-</button>
	</div>
	);

export default buildControl;